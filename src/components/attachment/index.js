import React, { Component } from 'react'
import Popover from '../popover'
import Icon from '../icon'
import Layout from '../layout'
import DataGrid from '../datagrid'
import Upload from '../upload'
import Viewer from 'react-viewer'
import classNames from 'classnames'
const Column = DataGrid.Column
const Cell = DataGrid.Cell

export default class attachmentComponent extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            activeIndex: 0,
            contentIsVisible: false
        }
    }

    contentVisibleChange = (visible) => {
        if (this.state.isOpen)
            return

        this.setState({ contentIsVisible: visible })
    }

    download = (index) => () => {
        this.props.onDownload && this.props.onDownload(this.props.data[index])
    }

    del = (index) => () => {
        this.props.onDel && this.props.onDel(this.props.data[index])
    }

    getContent = () => {
        const className = classNames({
            'mk-attachment-content': true,
            [this.props.contentClassName]: !!this.props.contentClassName
        })

        const data = this.props.data
        const columns = [
            <Column
                columnKey='link'
                flexGrow={1}
                cell={(ps) => {
                    return (
                        <Popover
                            content={this.getThumbnail(data[ps.rowIndex])}
                            arrowPointAtCenter={true}
                            placement='leftTop'
                        >
                            <Cell className='mk-attachment-content-link-cell'>
                                <a onClick={(e) => this.openViewer(ps.rowIndex, e)}>{data[ps.rowIndex].alt}</a>
                            </Cell>
                        </Popover>
                    )
                }}
                width={100}
            />,
            <Column
                columnKey='option'
                cell={(ps) => (
                    <Cell >
                        <Icon type='download' showStyle='showy' onClick={this.download(ps.rowIndex)} style={{ marginRight: 8 }} />
                        <Icon type='delete' showStyle='softly' onClick={this.del(ps.rowIndex)} />
                    </Cell>
                )}
                width={70}
            />
        ]


        return (
            <div className={className}>
                <DataGrid
                    rowsCount={data ? data.length : 0}
                    rowHeight={40}
                    columns={columns}
                    isFix
                    height={135}
                    width={250}
                />
                <Layout className='mk-attachment-content-footer'>
                    <Upload
                        showUploadList={false}
                        {...this.props.uploadProps}
                    >
                        <a href="#">
                            上传<Icon type='upload' />
                        </a>
                    </Upload>
                </Layout>
            </div>
        )
    }

    getThumbnail = (detail) => {
        return <div style={{ width: 200, height: 200 }}><img height={200} width={200} src={detail.src} /></div>
    }

    render() {
        const className = classNames({
            'mk-attachment': true,
            [this.props.className]: !!this.props.className
        })

        return (
            <Popover
                overlayClassName='mk-attachment-popover'
                content={this.getContent()}
                placement="bottomRight"
                onVisibleChange={this.contentVisibleChange}
                visible={this.state.contentIsVisible}
                title="附件"
                trigger='click'
            >
                <a {...this.props} className={className}>附件</a>
                {this.renderViewer(this.props.data)}
            </Popover>
        )
    }

    openViewer = (index, event) => {
        this.setState({
            isOpen: true,
            activeIndex: index
        })
    }

    closeViewer = () => {
        this.setState({
            isOpen: false,
        })
    }

    renderViewer(data) {
        if (!data) return null
        return (
            <Viewer
                images={this.props.data}
                visible={this.state.isOpen}
                activeIndex={this.state.activeIndex}
                container={null}
                onClose={this.closeViewer}
            />
        )
    }
}

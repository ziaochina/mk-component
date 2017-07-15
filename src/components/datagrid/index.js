import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import omit from 'omit.js'
import Grid from './grid'

import {
    Column,
    ColumnGroup
} from 'fixed-data-table'
import Cell from './cell'
import TextCell from './textCell'


class DataGridComponent extends React.Component {
    state = {
        height: 0,
        width: 0
    }

    constructor(props) {
        super(props)
        this.onResize = this.onResize.bind(this)
        this.update = this.update.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        let dom = ReactDOM.findDOMNode(this),
            height = dom.offsetHeight,
            width = dom.offsetWidth
        if (height != this.state.height || width != this.state.width) {
            this.setState({
                height,
                width
            })
        }
    }

    componentDidMount() {
        this.refreshSize()

        var win = window
        if (win.addEventListener) {
            win.addEventListener('resize', this.onResize, false)
        } else if (win.attachEvent) {
            win.attachEvent('onresize', this.onResize)
        } else {
            win.onresize = this.onResize
        }
    }

    componentWillUnmount() {
        var win = window
        if (win.removeEventListener) {
            win.removeEventListener('resize', this.onResize, false)
        } else if (win.detachEvent) {
            win.detachEvent('onresize', this.onResize)
        } else {
            win.onresize = undefined
        }
    }

    onResize() {
        this.refreshSize()
    }

    refreshSize() {
        this.setState({
            height: 0,
            width: 0
        })
    }

    update() {
        let dom = ReactDOM.findDOMNode(this),
            height = dom.clientHeight,
            width = dom.clientWidth

        this.setState({
            height,
            width
        })
    }
    render() {
        let className = classNames({
            'mk-datagrid': true,
            'mk-datagrid-editable': this.props.readonly === false,
            [this.props.className]: !!this.props.className,
        })

        return (
            <div className={className}
                onKeyDown={this.props.onKeyDown}
                onKeyUp={this.props.onKeyUp}>
                {Grid({
                    ...omit(this.props, ['className']),
                    width: this.state.width,
                    height: this.state.height
                })}
            </div>
        )
    }
}

DataGridComponent.Cell = Cell
DataGridComponent.TextCell = TextCell
DataGridComponent.Column = Column
DataGridComponent.ColumnGroup = ColumnGroup

export default DataGridComponent
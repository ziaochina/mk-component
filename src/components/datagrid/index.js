import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import omit from 'omit.js'
import Grid from './grid'

import {
    Column,
    ColumnGroup
} from 'fixed-data-table-2'
import Cell from './cell'
import TextCell from './textCell'
import _ from 'underscore'

class DataGridComponent extends React.Component {
    state = {
        height: 0,
        width: 0
    }

    constructor(props) {
        super(props)
        this.onResize = this.onResize.bind(this)
        this.update = this.update.bind(this)
        this.setStateDebounce = _.debounce(({ width, height }) => {
            this.setState({
                height,
                width
            })
        }, 1)
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.isFix === true) return 

        let dom = ReactDOM.findDOMNode(this),
            height = dom.offsetHeight,
            width = dom.offsetWidth

        //计算我的最大高度
        var maxHeight = 0
        if (dom.parentElement) {
            maxHeight = dom.parentElement.offsetHeight

            for (let c of dom.parentElement.children) {
                if (c != dom) {
                    maxHeight -= c.offsetHeight
                }
            }
        }

        if (height != this.state.height || width != this.state.width) {

            height = (maxHeight > 0 && height > maxHeight) ? maxHeight : height
            this.setStateDebounce({
                height,
                width
            })
        }
        else if (height > maxHeight && maxHeight > 0) {
            this.setStateDebounce({
                height: maxHeight,
                width
            })
        }
    }

    componentDidMount() {
        if(this.props.isFix === true) return  
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
        if(this.props.isFix === true) return  
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
        if (this.props.onResize)
            setTimeout(this.props.onResize, 16)
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
        this.setStateDebounce({
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

        const width = this.props.isFix ? this.props.width : this.state.width
        const height = this.props.isFix ? this.props.height : this.state.height


        return (
            <div className={className}
                onKeyDown={this.props.onKeyDown}
                onKeyUp={this.props.onKeyUp}>
                {Grid({
                    ...omit(this.props, ['className']),
                    width,
                    height
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
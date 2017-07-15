import React from 'react'
import { Table } from 'antd'
import classNames from 'classnames'

function TableComponent(props) {
	let className = classNames({
		'mk-table': true,
		[props.className]: !!props.className
	})
	return <Table {...props} className={className} />
}


TableComponent.Column = Table.Column
TableComponent.ColumnGroup = Table.ColumnGroup
TableComponent.rowSelection = Table.rowSelection
TableComponent.selection = Table.selection

export default TableComponent
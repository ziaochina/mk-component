```javascript
import React, { Component } from 'react'
import { DataGrid, Checkbox, Icon } from 'mk-component'

const Column = DataGrid.Column
const Cell = DataGrid.Cell

const dataSource = []

for (let i = 0; i < 100; i++) {
	dataSource.push({
		code: `code${i}`,
		name: `name${i}`
	})
}

const columns = [
	<Column
		columnKey='select'
		fixed
		header={<Cell><Checkbox /></Cell>}
		cell={(ps) => <Cell><Checkbox /></Cell>}
		width={40}
	/>,
	<Column
		columnKey='option'
		fixed
		header={<Cell>操作</Cell>}
		cell={(ps) => <Cell ><Icon type='github' showStyle='showy' style={{ marginRight: 8 }} /><Icon type='github' showStyle='softly' /></Cell>}
		width={70}
	/>,
	<Column
		columnKey='code'
		header={<Cell>编码</Cell>}
		cell={(ps) => <Cell>{dataSource[ps.rowIndex].code}</Cell>}
		footer={<Cell>footer</Cell>}
		width={200}
	/>,
	<Column
		columnKey='name'
		header={<Cell>名称</Cell>}
		cell={(ps) => <Cell>{dataSource[ps.rowIndex].name}</Cell>}
		footer={<Cell>footer</Cell>}
		flexGrow={1}
		width={200}
	/>,
	<Column
		columnKey='ext1'
		header={<Cell>Ext1</Cell>}
		cell={(ps) => <Cell>ext1</Cell>}
		flexGrow={1}
		width={400}
	/>,
	<Column
		columnKey='ext2'
		header={<Cell>Ext2</Cell>}
		cell={(ps) => <Cell>ext2</Cell>}
		flexGrow={1}
		width={400}
	/>,
	<Column
		columnKey='ext3'
		header={<Cell>Ext3</Cell>}
		cell={(ps) => <Cell>ext3</Cell>}
		flexGrow={1}
		width={400}
	/>
]

export default class Example1 extends Component {
	render() {
		return (
			<div style={{ height: 300, display: 'flex' }}>
				<DataGrid
					headerHeight={35}
					rowsCount={100}
					rowHeight={35}
					footerHeight={35}
					columns={columns}
				/>
			</div>
		)
	}
}
```
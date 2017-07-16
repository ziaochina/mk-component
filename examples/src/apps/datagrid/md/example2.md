```javascript
import React, { Component } from 'react'
import { DataGrid, Checkbox } from 'mk-component'

const Column = DataGrid.Column
const Cell = DataGrid.Cell
const TextCell = DataGrid.TextCell

const dataSource = []

for (let i = 0; i < 100; i++) {
	dataSource.push({
		code: `code${i}`,
		name: `name${i}`,
		memo: '这是一个使用textCell的示例，鼠标移入到当前会有提示',
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
		columnKey='code'
		header={<Cell>编码</Cell>}
		cell={(ps) => <TextCell value={dataSource[ps.rowIndex].code} />}
		footer={<Cell>footer</Cell>}
		width={200}
	/>,
	<Column
		columnKey='name'
		header={<Cell>名称</Cell>}
		cell={(ps) => <TextCell align='left' value={dataSource[ps.rowIndex].name} sand={(v) => [<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>, v]} />}
		footer={<Cell>footer</Cell>}
		flexGrow={1}
		width={200}
	/>,
	<Column
		columnKey='memo'
		header={<Cell>描述</Cell>}
		cell={(ps) => <TextCell enableEllipsis value={dataSource[ps.rowIndex].memo} />}
		footer={<Cell>footer</Cell>}
		flexGrow={1}
		width={200}
	/>,
	<Column
		columnKey='price'
		header={<Cell>单价</Cell>}
		cell={(ps) => <TextCell dataType='float' align='right' style={{ paddingRight: 8 }} precision={2} enableTooltip value={43243432.116666666} sand={(v) => ("" + v).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,")} />}
		flexGrow={1}
		width={200}
	/>,
	<Column
		columnKey='bool'
		header={<Cell>布尔</Cell>}
		cell={(ps) => <TextCell dataType='bool' value={true} />}
		flexGrow={1}
		width={200}
	/>,
	<Column
		columnKey='custom'
		header={<Cell>自定义</Cell>}
		cell={(ps) => <div>自定义cell组件</div>}
		flexGrow={1}
		width={200}
	/>
]

export default class Example2 extends Component {
	render() {
		return (
			<div style={{ height: 300, width: '100%', display: 'flex' }}>
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
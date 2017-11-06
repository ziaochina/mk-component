import React from 'react'
import ReactDOM from 'react-dom'
import {
	Table
} from 'fixed-data-table-2'
import SequenceColumn from './sequenceColumn'

export default function GridComponent(props) {
	let {
		key,
		rowsCount,
		headerHeight,
		rowHeight,
		groupHeaderHeight,
		footerHeight,
		width,
		height,
		heightFromRowsCount,
		readonly,
		enableSequence,
		startSequence,
		enableAddDelrow,
		sequenceFooter,
		onAddrow,
		onDelrow,
		onRowClick,
		onRowDoubleClick,
		onRowMouseEnter,
		onRowMouseLeave,
		onScrollEnd,
		scrollToRow,
		scrollToColumn,
		columns,
		...other,
	} = props

	//高度根据行数计算
	if (heightFromRowsCount) {
		height = headerHeight + 2 + rowHeight * rowsCount + footerHeight
	}

	columns = [...columns]
	if (enableSequence) {
		columns.splice(0, 0, SequenceColumn({
			startSequence,
			enableAddDelrow: readonly === false ? enableAddDelrow : false,
			footer: sequenceFooter,
			onAddrow,
			onDelrow
		}))
	}


	return (
		<Table
			{...other}
			key={key}
			rowsCount={(height == 0 || width == 0) ? 0 : rowsCount}
			headerHeight={headerHeight}
			rowHeight={rowHeight}
			groupHeaderHeight={groupHeaderHeight}
			footerHeight={footerHeight}
			width={width}
			height={height}
			scrollToRow={(height != 0 && width != 0) ? scrollToRow : undefined}
			scrollToColumn={(height != 0 && width != 0) ? scrollToColumn : undefined}
			onRowDoubleClick={readonly === false ? undefined : onRowDoubleClick}
			onRowClick={readonly === false ? undefined : onRowClick}
			onRowMouseEnter={readonly === false ? undefined : onRowMouseEnter}
			onRowMouseLeave={readonly === false ? undefined : onRowMouseLeave}
			scrollEnd={onScrollEnd}
		>
			{columns}
		</Table>
	)
}
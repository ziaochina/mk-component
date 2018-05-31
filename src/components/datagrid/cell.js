import React, { Component } from 'react'
import { Cell } from 'fixed-data-table-2'
import classNames from 'classnames'
/*
export default function cellComponent(props) {
	const {
		height,
		width,
		style,
		className,
		align,
		children,
		...other
	} = props

	let cls = classNames({
		'mk-datagrid-cellContent': true,
		[`mk-datagrid-cellContent-${align}`]: !!align,
		[className]: !!className
	})

	var innerStyle = {
		height,
		width,
		...style,
	}

	return (
		<div {...other} className={cls} style={innerStyle}>
			{children}
		</div>
	)
}*/


export default class cellComponent extends React.PureComponent {
	render() {
		const {
      		height,
			width,
			style,
			className,
			align,
			children,
			...other
    	} = this.props

		let cls = classNames({
			'mk-datagrid-cellContent': true,
			[`mk-datagrid-cellContent-${align}`]: !!align,
			[className]: !!className
		})

		var innerStyle = {
			height,
			width,
			...style,
		}

		return (
			<div {...other} className={cls} style={innerStyle}>
				{children}
			</div>
		)
	}
}
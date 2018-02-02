import React from 'react'
import { List } from 'antd'
import classNames from 'classnames'

function ListComponent(props) {
	let className = classNames({
		'mk-list': true,
		[props.className]: !!props.className
	})
	return <List {...props} className={className} />
}

ListComponent.Item = List.Item
ListComponent.Item.Meta = List.Item.Meta

export default ListComponent


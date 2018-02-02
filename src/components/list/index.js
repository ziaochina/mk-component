import React from 'react'
import { List } from 'antd'
import classNames from 'classnames'

export default function CarouselComponent(props) {
	let className = classNames({
		'mk-list': true,
		[props.className]: !!props.className
	})
	return <List {...props} className={className} />
}

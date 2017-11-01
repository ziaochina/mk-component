import React from 'react'
import { Icon } from 'antd'
import FA from 'react-fa'
import classNames from 'classnames'

export default function IconComponent(props) {
	if (props.visible === false)
		return null

	let showStyle = props.showStyle

	if (props.disabled) {
		showStyle = 'disabled'
	}

	let className = 'mk-icon'

	if (props.fontFamily == 'awesome') {
		className = classNames({
			[className]: true,
			[`mkicon--${showStyle}`]: !!showStyle,
			[props.className]: !!props.className
		})
		return <FA {...props} className={className} name={props.type} />
	}

	className = classNames({
		[className]: true,
		[props.fontFamily]: !!props.fontFamily,
		[`${props.fontFamily}-${props.type}`]: !!props.fontFamily,
		[`mkicon--${showStyle}`]: !!showStyle,
		[props.className]: !!props.className
	})

	return <Icon {...props} className={className} />
}

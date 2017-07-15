import React from 'react'
import { Checkbox } from 'antd'
import classNames from 'classnames'

function CheckboxComponent(props) {
	let className = classNames({
		'mk-checkbox': true,
		[props.className]: !!props.className
	})
	return <Checkbox {...props} className={className} />
}

CheckboxComponent.Group = Checkbox.Group
export default CheckboxComponent

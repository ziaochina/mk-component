import React from 'react'
import RedBox from 'redbox-react'
import classNames from 'classnames'

function RedboxReactComponent(props) {
	let className = classNames({
		'mk-redbox-react': true,
		[props.className]: !!props.className
	})
	return <RedBox {...props} className={className} />
}
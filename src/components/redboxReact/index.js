import React from 'react'
import RedBox, { RedBoxError } from 'mk-redbox-react'
import classNames from 'classnames'

const STYLE = {
	redbox: {
		boxSizing: 'border-box',
		fontFamily: 'sans-serif',
		position: 'relative',
		padding: 10,
		top: '0px',
		left: '0px',
		bottom: '0px',
		right: '0px',
		width: '100%',
		background: 'rgb(204, 0, 0)',
		color: 'white',
		zIndex: 2147483647,
		textAlign: 'left',
		fontSize: '16px',
		lineHeight: 1.2,
		overflow: 'auto'
	},
	message: {
		fontWeight: 'bold'
	},
	stack: {
		fontFamily: 'monospace',
		marginTop: '2em'
	},
	frame: {
		marginTop: '1em'
	},
	file: {
		fontSize: '0.8em',
		color: 'rgba(255, 255, 255, 0.7)'
	},
	linkToFile: {
		textDecoration: 'none',
		color: 'rgba(255, 255, 255, 0.7)'
	}
}

function RedboxReactComponent(props) {
	let className = classNames({
		'mk-redbox-react': true,
		[props.className]: !!props.className
	})
	return <RedBox {...props} className={className} />
}

function RedBoxErrorComponent(props) {
	let className = classNames({
		'mk-redbox-error': true,
		[props.className]: !!props.className
	})

	var style = STYLE
	var error = {}
	if (!props.error) {
		error.stack = ''
	}
	if (typeof props.error == 'string') {
		error.stack = props.error
	} else if (!props.error.stack && props.error.message) {
		error.stack = props.error.message
	}
	else {
		error = props.error
	}

	if (props.style) {
		style = { ...style, ...props.style }
	}

	return <RedBoxError {...props} className={className} style={style} error={error} />
}

RedboxReactComponent.RedBoxError = RedBoxErrorComponent

export default RedboxReactComponent

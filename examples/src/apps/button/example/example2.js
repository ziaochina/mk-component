import React, { Component } from 'react'
import { Button, Icon } from 'mk-component'

export default class Example2 extends Component {
	render() {
		let style = { marginRight: 10 }
		return (
			<div>
				<Button type="softly" icon='download' style={style}>download</Button>
				<Button type="showy" shape="circle" icon='download' style={style} />
				<Button type="primary" icon='download' style={style}></Button>
				<Button type="danger" icon='menu-dropdown' iconFontFamily='mkicon' style={style} >sort</Button>
				<Button>
					more <Icon type="down" />
				</Button>
			</div>
		)
	}
}
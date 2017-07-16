import React, { Component } from 'react'
import { Tooltip, Button } from 'mk-component'

export default class Example1 extends Component {
	render() {
		return (
			<div>
				<Tooltip title="Prompt Text">
					<Button>默认</Button>
				</Tooltip>
				<Tooltip placement="topLeft" title="Prompt Text">
					<Button>边缘对齐</Button>
				</Tooltip>
				<Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
					<Button>中间</Button>
				</Tooltip>
			</div>
		)
	}
}
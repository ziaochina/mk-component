import React, { Component } from 'react'
import { Badge } from 'mk-component'

export default class Example1 extends Component {
	render() {
		return (
			<div>
				<Badge count={25} />
				<br />
				<br />
				<Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
				<br />
				<br />
				<Badge count={109} style={{ backgroundColor: '#87d068' }} />
				<br />
				<br />
				<Badge count={5}>
					<a href="#" style={{ height: 42, width: 42, display: 'inline-block', backgroundColor: '#eee' }} />
				</Badge>
			</div>
		)
	}
}
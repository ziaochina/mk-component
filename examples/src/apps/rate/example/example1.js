import React, { Component } from 'react'
import { Rate, Icon } from 'mk-component'

export default class Example1 extends Component {
	render() {
		return (
			<div>
				<Rate allowHalf defaultValue={2.5} />
				<br />
				<Rate character={<Icon type="heart" />} allowHalf />
				<br />
				<Rate character="A" defaultValue={4} style={{ fontSize: 36 }} />
				<br />
				<Rate character="好" defaultValue={1.5} allowHalf />
			</div>
		)
	}
}
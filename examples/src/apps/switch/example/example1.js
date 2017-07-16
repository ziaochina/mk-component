import React, { Component } from 'react'
import { Switch, Icon } from 'mk-component'

export default class Example1 extends Component {
	handleChange = (checked) => {
		console.log(`switch to ${checked}`)
	}
	render() {
		return (
			<div>
				<Switch checkedChildren={'开'} unCheckedChildren={'关'} onChange={this.handleChange} />
				<br />
				<br />
				<Switch checkedChildren="1" unCheckedChildren="0" />
				<br />
				<br />
				<Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
			</div>
		)
	}
}
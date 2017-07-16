import React, { Component } from 'react'
import { Radio } from 'mk-component'

export default class Example1 extends Component {
	handleChange = (e) => {
		console.log(`checked = ${e.target.checked}`)
	}
	render() {
		return (
			<div>
				<Radio onChange={this.handleChange}>Radio</Radio>
			</div>
		)
	}
}
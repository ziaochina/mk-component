import React, { Component } from 'react'
import { Radio } from 'mk-component'
const RadioGroup = Radio.Group

export default class Example2 extends Component {
	handleChange = (e) => {
		console.log('radio checked', e.target.value)
	}
	render() {
		return (
			<RadioGroup onChange={this.handleChange}>
				<Radio value={1}>A</Radio>
				<Radio value={2}>B</Radio>
				<Radio value={3}>C</Radio>
				<Radio value={4}>D</Radio>
			</RadioGroup>
		)
	}
}
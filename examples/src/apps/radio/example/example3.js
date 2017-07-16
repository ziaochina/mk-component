import React, { Component } from 'react'
import { Radio } from 'mk-component'
const RadioGroup = Radio.Group
const RadioButton = Radio.Button

export default class Example3 extends Component {
	handleChange = (e) => {
		console.log('radio checked', e.target.value)
	}
	render() {
		return (
			<RadioGroup onChange={this.handleChange} defaultValue="a">
				<RadioButton value="a">Hangzhou</RadioButton>
				<RadioButton value="b">Shanghai</RadioButton>
				<RadioButton value="c">Beijing</RadioButton>
				<RadioButton value="d">Chengdu</RadioButton>
			</RadioGroup>
		)
	}
}
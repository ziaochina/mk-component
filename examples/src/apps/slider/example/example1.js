import React, { Component } from 'react'
import { Slider } from 'mk-component'

export default class Example1 extends Component {

	handleChange(value) {
		console.log(value)
	}

	render() {
		return (
			<div style={{ height: 400 }}>
				<Slider defaultValue={30} onChange={this.handleChange} />
				<Slider range defaultValue={[20, 50]} />
				<div style={{ float: "left", height: 300 }}>
					<Slider vertical defaultValue={30} />
				</div>
				<div style={{ float: "left", height: 300 }}>
					<Slider vertical range step={10} defaultValue={[20, 50]} />
				</div>
			</div>
		)
	}
}
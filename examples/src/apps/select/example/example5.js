import React, { Component } from 'react'
import { Select } from 'mk-component'

const Option = Select.Option


const children = [];
for (let i = 10; i < 36; i++) {
	children.push(<Option key={i.toString(36) + i} >{i.toString(36) + i}</Option>)
}

export default class Example5 extends Component {

	handleChange(value) {
		console.log(`selected ${value}`);
	}

	render() {
		return (
			<div>
				<Select
					mode="tags"
					style={{ width: '100%' }}
					placeholder="标签模式"
					onChange={this.handleChange}>

					{children}

				</Select>
			</div>
		)
	}
}
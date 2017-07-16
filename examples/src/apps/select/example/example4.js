import React, { Component } from 'react'
import { Select } from 'mk-component'

const Option = Select.Option


const children = [];
for (let i = 10; i < 36; i++) {
	children.push(<Option key={i.toString(36) + i} >{i.toString(36) + i}</Option>)
}

export default class Example4 extends Component {

	handleChange(value) {
		console.log(`selected ${value}`);
	}

	render() {
		return (
			<div>
				<Select
					mode="multiple"
					style={{ width: '100%' }}
					placeholder="多选模式"
					onChange={this.handleChange}>

					{children}

				</Select>
			</div>
		)
	}
}
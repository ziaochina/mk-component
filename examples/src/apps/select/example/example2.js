import React, { Component } from 'react'
import { Select } from 'mk-component'

const Option = Select.Option

export default class Example2 extends Component {

	handleChange(value) {
		console.log(`selected ${value}`);
	}

	render() {
		return (
			<div>
				<Select
					showSearch
					style={{ width: 200 }}
					placeholder="Select"
					onChange={this.handleChange}>
					<Option value="1">aaa</Option>
					<Option value="2">bbb</Option>
					<Option value="3">ccc</Option>
					<Option value="4">ddd</Option>
				</Select>
				<br />
				<br />
				<Select
					showSearch
					style={{ width: 200 }}
					placeholder="Select"
					optionFilterProp="children"
					onChange={this.handleChange}>
					<Option value="1">aaa</Option>
					<Option value="2">bbb</Option>
					<Option value="3">ccc</Option>
					<Option value="4">ddd</Option>
				</Select>
				<br />
				<br />
				<Select
					showSearch
					style={{ width: 200 }}
					placeholder="Select"
					filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
					onChange={this.handleChange}>
					<Option value="1">aaa</Option>
					<Option value="2">bbb</Option>
					<Option value="3">ccc</Option>
					<Option value="4">ddd</Option>
				</Select>
			</div>
		)
	}
}

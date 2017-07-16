import React, { Component } from 'react'
import { Select, Button, Modal, Input } from 'mk-component'

const Option = Select.Option

export default class Example7 extends Component {

	handleChange = (value) => {
		console.log(`selected ${value}`);
	}

	handleLinkClick = (e) => {
		e.stopPropagation()
		console.log('link')
	}

	render() {
		return (
			<div>
				<Select
					style={{ width: 200 }}
					onChange={this.handleChange}
					showArrow={false}
					suffix={<a onClick={this.handleLinkClick}>link</a>}
				>
					<Option value="1">aaa</Option>
					<Option value="2">bbb</Option>
					<Option value="3">ccc</Option>
					<Option value="4">ddd</Option>
				</Select>
			</div>
		)
	}
}
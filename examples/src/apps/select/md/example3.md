```javascript


import React, { Component } from 'react'
import { Select } from 'mk-component'

const Option = Select.Option

export default class Example3 extends Component {

	handleChange(value) {
		console.log(`selected ${value}`);
	}

	render() {
		return (
			<div>
				<Select
					mode="combobox"
					style={{ width: 200 }}
					placeholder="Select"
					optionFilterProp="children"
					optionLabelProp="children"
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
```
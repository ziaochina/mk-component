```javascript
import React, { Component } from 'react'
import { Select } from 'mk-component'

const Option = Select.Option

export default class Example1 extends Component {

	handleChange(value) {
		console.log(`selected ${value}`);
	}

	render() {
		return (
			<div>
				<Select defaultValue="2" style={{ width: 120 }} onChange={this.handleChange}>
					<Option value="1">aaa</Option>
					<Option value="2">bbb</Option>
					<Option value="3" disabled>ccc</Option>
					<Option value="4">ddd</Option>
				</Select>
			</div>
		)
	}
}
```
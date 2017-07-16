```javascript
import React, { Component } from 'react'
import { Select, Button, Modal, Input } from 'mk-component'

const Option = Select.Option

export default class Example1 extends Component {
	constructor(props) {
		super(props)

		this.state = {
			items: ["aaa1", "aaa2", "ccc3"],
			inputValue: ''
		}

	}

	handleChange = (value) => {
		console.log(`selected ${value}`);
	}

	handleAddInputChange = (e) => {
		this.setState({ inputValue: e.target.value })
	}

	handleAdd = async () => {
		if (await Modal.show({
			title: "新增",
			children: (<div><Input value={this.state.inputValue} onChange={this.handleAddInputChange} /></div>)
		})) {
			let items = this.state.items
			items.push(this.state.inputValue)
			this.setState({ items, inputValue: '' })
		}
		else {
			this.setState({ inputValue: '' })
		}
	}


	render() {
		return (
			<div>
				<Select
					style={{ width: 120 }}
					onChange={this.handleChange}
					dropdownFooter={<Button style={{ width: "100%" }} type="primary" onClick={this.handleAdd}>新增</Button>}
					enableHideDropdownByClick={true}>
					{
						this.state.items.map(i => <Option key={i}>{i}</Option>)
					}
				</Select>
			</div>
		)
	}
}
```
```javascript
import React, { Component } from 'react'
import { Input, Select, InputNumber } from 'antd'
const InputGroup = Input.Group
const Option = Select.Option

export default class Example5 extends Component {
	render() {
		return (
			<div>
				<InputGroup compact>
					<Input style={{ width: '20%' }} defaultValue="0571" />
					<Input style={{ width: '30%' }} defaultValue="26888888" />
				</InputGroup>
				<br />
				<InputGroup compact>
					<Select defaultValue="Zhejiang">
						<Option value="Zhejiang">Zhejiang</Option>
						<Option value="Jiangsu">Jiangsu</Option>
					</Select>
					<Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
				</InputGroup>
				<br />
				<InputGroup compact>
					<Select defaultValue="Option1-1">
						<Option value="Option1-1">Option1-1</Option>
						<Option value="Option1-2">Option1-2</Option>
					</Select>
					<Select defaultValue="Option2-2">
						<Option value="Option2-1">Option2-1</Option>
						<Option value="Option2-2">Option2-2</Option>
					</Select>
				</InputGroup>
			</div>
		)
	}
}
```
```javascript
import React, { Component } from 'react'
import { Transfer } from 'mk-component'

const mockData = [];
for (let i = 0; i < 20; i++) {
	mockData.push({
		key: i.toString(),
		title: `content${i}`,
		description: `description of content${i}`,
		disabled: i % 3 < 1,
	})
}

const targetKeys = mockData
	.filter(item => +item.key % 3 > 1)
	.map(item => item.key)


export default class Example1 extends Component {
	state = {
		targetKeys,
		selectedKeys: [],
	}

	handleChange = (nextTargetKeys, direction, moveKeys) => {
		this.setState({ targetKeys: nextTargetKeys })
		console.log('targetKeys: ', targetKeys)
		console.log('direction: ', direction)
		console.log('moveKeys: ', moveKeys)
	}

	handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
		this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] })
		console.log('sourceSelectedKeys: ', sourceSelectedKeys)
		console.log('targetSelectedKeys: ', targetSelectedKeys)
	}

	handleScroll = (direction, e) => {
		console.log('direction:', direction)
		console.log('target:', e.target)
	}

	render() {
		const state = this.state
		return (
			<Transfer
				dataSource={mockData}
				titles={['Source', 'Target']}
				targetKeys={state.targetKeys}
				selectedKeys={state.selectedKeys}
				onChange={this.handleChange}
				onSelectChange={this.handleSelectChange}
				onScroll={this.handleScroll}
				render={item => item.title}
			/>
		)
	}
}
```
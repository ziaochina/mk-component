```javascript
import React, { Component } from 'react'
import { Collapse } from 'mk-component'

const Panel = Collapse.Panel

export default class Example1 extends Component {

	callback(key) {
		console.log(key)
	}

	render() {
		const text = "hello world"
		return (
			<Collapse defaultActiveKey={['1']} onChange={this.callback}>
				<Panel header="This is panel header 1" key="1">
					<p>{text}</p>
				</Panel>
				<Panel header="This is panel header 2" key="2">
					<p>{text}</p>
				</Panel>
				<Panel header="This is panel header 3" key="3">
					<p>{text}</p>
				</Panel>
			</Collapse>
		)
	}
}
```
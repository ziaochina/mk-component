```javascript
import React, { Component } from 'react'
import { Popconfirm } from 'mk-component'

export default class Example1 extends Component {

	confirm(e) {
		console.log(e)
	}

	cancel(e) {
		console.log(e)
	}

	render() {
		return (
			<div>
				<Popconfirm
					title="确定删除?"
					onConfirm={this.confirm}
					onCancel={this.cancel}
					okText="Yes"
					cancelText="No">

					<a href="#">删除</a>

				</Popconfirm>
			</div>
		)
	}
}
```
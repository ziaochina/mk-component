```javascript
import React, { Component } from 'react'
import { Notification, Button } from 'mk-component'

export default class Example1 extends Component {

	openSuccess() {
		Notification.success({
			message: 'success',
			description: 'success',
		})
	}

	async openInfo() {
		//使用await调用，返回true表示关闭
		if (await Notification.info({
			message: 'info',
			description: 'info',
		})) {
			console.log('close')
		}
	}

	openWarning() {
		Notification.warning({
			message: 'warning',
			description: 'warning',
		})
	}

	openError() {
		Notification.error({
			message: 'error',
			description: 'error',
		})
	}

	render() {
		return (
			<div>
				<Button onClick={this.openSuccess}>Success</Button>
				<br />
				<br />
				<Button onClick={this.openInfo}>Info</Button>
				<br />
				<br />
				<Button onClick={this.openWarning}>Warning</Button>
				<br />
				<br />
				<Button onClick={this.openError}>Error</Button>
			</div>
		)
	}
}
```
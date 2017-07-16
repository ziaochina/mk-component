```javascript
import React, { Component } from 'react'
import { Alert } from 'mk-component'

export default class Example1 extends Component {
	render() {
		return (
			<div>
				<Alert message="Success Text" type="success" />
				<br />
				<Alert message="Info Text" type="info" />
				<br />
				<Alert message="Warning Text" type="warning" />
				<br />
				<Alert message="Error Text" type="error" />
			</div>
		)
	}
}
```
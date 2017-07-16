```javascript
import React, { Component } from 'react'
import { Button } from 'mk-component'

export default class Example1 extends Component {
	render() {
		let style = { marginRight: 10 }
		return (
			<div>
				<Button style={style}>Default</Button>
				<Button type="showy" style={style}>Showy</Button>
				<Button type="softly" style={style}>Softly</Button>
				<Button type="primary" style={style}>Primary</Button>
				<Button type="dashed" style={style}>Dashed</Button>
				<Button type="danger" style={style}>Danger</Button>
				<Button type="primary" disabled style={style}>Disabled</Button>
			</div>
		)
	}
}
```
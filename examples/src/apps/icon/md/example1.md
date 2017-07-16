```jsx
import React, { Component } from 'react'
import { Icon } from 'mk-component'

export default class Example1 extends Component {
	render() {
		let style = { fontSize: 16, marginRight: 20 }
		return (
			<div>
				<Icon type='github' style={style} />
				<Icon type='github' visible={false} style={style} />
				<Icon type='github' disabled style={style} />
				<Icon type='github' showStyle='showy' style={style} />
				<Icon type='github' showStyle='softly' style={style} />
				<Icon type='github' showStyle='primary' style={style} />
				<Icon type='github' showStyle='normal' style={style} />
				<Icon type='menu-dropdown' fontFamily='mkicon' showStyle='primary' style={style} />
			</div>
		)
	}
}
```
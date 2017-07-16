```javascript
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Input, Icon } from 'mk-component'

export default class Example2 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: ''
		}
	}

	emitEmpty = () => {
		let dom = ReactDOM.findDOMNode(this.userNameInput)
		dom.querySelector('input').focus()
		this.setState({ userName: '' })
	}

	handleChangeUserName = (e) => {
		this.setState({ userName: e.target.value })
	}

	render() {
		const { userName } = this.state
		const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null

		return (
			<div>
				<Input
					placeholder="Enter your userName"
					prefix={<Icon type="user" />}
					suffix={suffix}
					value={userName}
					onChange={this.handleChangeUserName}
					ref={node => this.userNameInput = node}
				/>
			</div>
		)
	}
}
```
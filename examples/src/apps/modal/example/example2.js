import React, { Component } from 'react'
import { Modal, Button } from 'mk-component'

export default class Example2 extends Component {

	showInfo = () => {
		Modal.info({ title: 'info', content: 'info' })
	}

	showError = () => {
		Modal.error({ title: 'error', content: 'Error' })
	}

	showSuccess = async () => {
		let ret = await Modal.success({ title: 'success', content: 'Success' })
		console.log(ret)
	}

	showWarning = async () => {
		let ret = await Modal.warning({ title: 'warning', content: 'Warning' })
		console.log(ret)
	}

	showConfirm = async () => {
		let ret = await Modal.confirm({ title: 'confirm', content: 'confirm' })
		console.log(ret)
	}

	render() {
		return (
			<div>
				<Button onClick={this.showInfo}>Info</Button>
				<br />
				<br />
				<Button onClick={this.showError}>Error</Button>
				<br />
				<br />
				<Button onClick={this.showSuccess}>Success</Button>
				<br />
				<br />
				<Button onClick={this.showWarning}>Warning</Button>
				<br />
				<br />
				<Button onClick={this.showConfirm}>Confirm</Button>
			</div>
		)
	}
}
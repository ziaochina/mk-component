import React, { Component } from 'react'
import { Alert } from 'mk-component'

export default class Example1 extends Component {
	handleClose(e) {
		console.log(e, 'I was closed.');
	}

	render() {
		return (
			<div>
				<Alert
					message="success tips"
					description="Detailed description and advices about successful copywriting."
					type="success"
					showIcon
					closable
					onClose={this.handleClose}
				/>
				<br />
				<Alert
					message="Informational Notes"
					description="Additional description and informations about copywriting."
					type="info"
					showIcon
				/>
				<br />
				<Alert
					message="Warning"
					description="This is a warning notice about copywriting."
					type="warning"
					showIcon
				/>
				<br />
				<Alert
					message="Error"
					description="This is an error message about copywriting."
					type="error"
					showIcon
				/>
			</div>
		)
	}
}
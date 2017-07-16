import React, { Component } from 'react'
import { Spin, Alert } from 'mk-component'

export default class Example1 extends Component {
	render() {
		return (
			<div>
				<Spin size="small" />
				<Spin />
				<Spin size="large" />
				<Spin tip="Loading...">
					<Alert
						message="Alert message title"
						description="Further details about the context of this alert."
						type="info"
					/>
				</Spin>
			</div>
		)
	}
}
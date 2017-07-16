import React, { Component } from 'react'
import { Form, Input, Icon, Button } from 'mk-component'
const FormItem = Form.Item

export default class Example2 extends Component {
	render() {
		return (
			<Form layout="horizontal">
				<FormItem
					validateStatus='error'
					help='error'
					hasFeedback
					wrapperCol={{ style: { marginRight: 20 } }}
				>
					<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
				</FormItem>
				<FormItem wrapperCol={{ style: { marginRight: 20 } }}>
					<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
				</FormItem>
				<FormItem>
					<Button type="primary">
						Log in
		          </Button>
				</FormItem>
			</Form>
		)
	}
}
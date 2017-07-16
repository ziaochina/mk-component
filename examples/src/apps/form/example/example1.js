import React, { Component } from 'react'
import { Form, Input, Button } from 'mk-component'
const FormItem = Form.Item

export default class Example1 extends Component {
	render() {
		return (
			<Form>
				<FormItem
					style={{ marginBottom: 20 }}
					label="用户名"
					labelCol={{ style: { width: 100 } }}
					validateStatus='error'
					help='error'
					hasFeedback
					required
				>
					<Input />
				</FormItem>
				<FormItem
					style={{ marginBottom: 20 }}
					label="密码"
					labelCol={{ style: { width: 100 } }}
					required
				>
					<Input type='password' />
				</FormItem>
				<FormItem wrapperCol={{ style: { marginLeft: 100 } }}>
					<Button type="primary">
						Log in
		          </Button>
				</FormItem>
			</Form>
		)
	}
}
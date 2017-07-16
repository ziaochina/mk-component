import React, { Component } from 'react'
import { Notification, Button } from 'mk-component'

export default class Example1 extends Component {

	openNotification() {
		Notification.open({
			message: '通知标题',
			description: '通知内容',
		})
	}

	async openNotification1() {
		//使用await调用，返回true表示关闭
		if (await Notification.open({
			message: '通知标题',
			description: '通知内容',
		})) {
			console.log('close')
		}
	}

	render() {
		return (
			<div>
				<Button onClick={this.openNotification}>打开一个通知</Button>
				<br />
				<br />
				<Button onClick={this.openNotification1}>打开一个通知,处理关闭事件</Button>
			</div>
		)
	}
}
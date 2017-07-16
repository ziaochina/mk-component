import React, { Component } from 'react'
import { Dropdown, Menu, Icon } from 'mk-component'

const menu = (
	<Menu>
		<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
		</Menu.Item>
		<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
		</Menu.Item>
		<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3d menu item</a>
		</Menu.Item>
	</Menu>
)

export default class Example1 extends Component {
	render() {
		let a = Dropdown
		let b = Menu
		debugger
		return (
			<Dropdown overlay={menu}>
				<a className="ant-dropdown-link" href="#">
					Hover me <Icon type="down" />
				</a>
			</Dropdown>
		)
	}
}
import React, { Component } from 'react'
import { Tabs } from 'mk-component'
const TabPane = Tabs.TabPane

export default class Example1 extends Component {

	handleChange = (key) => {
		console.log(key)
	}

	render() {
		return (
			<Tabs defaultActiveKey="1" onChange={this.handleChange}>
				<TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
				<TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
				<TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
			</Tabs>
		)
	}
}
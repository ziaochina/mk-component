import React, { Component } from 'react'
import { Timeline } from 'mk-component'

export default class Example1 extends Component {
	render() {
		return (
			<Timeline>
				<Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
				<Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
				<Timeline.Item color="red">
					<p>Solve initial network problems 1</p>
					<p>Solve initial network problems 2</p>
					<p>Solve initial network problems 3 2015-09-01</p>
				</Timeline.Item>
				<Timeline.Item>
					<p>Technical testing 1</p>
					<p>Technical testing 2</p>
					<p>Technical testing 3 2015-09-01</p>
				</Timeline.Item>
			</Timeline>
		)
	}
}
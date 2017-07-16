import React, { Component } from 'react'
import { Steps } from 'mk-component'

const Step = Steps.Step

export default class Example1 extends Component {
	render() {
		return (
			<div>
				<Steps current={1}>
					<Step title="Finished" description="This is a description." />
					<Step title="In Progress" description="This is a description." />
					<Step title="Waiting" description="This is a description." />
				</Steps>
				<br />
				<br />
				<Steps direction="vertical" current={1}>
					<Step title="Finished" description="This is a description." />
					<Step title="In Progress" description="This is a description." />
					<Step title="Waiting" description="This is a description." />
				</Steps>
			</div>
		)
	}
}
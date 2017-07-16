import React, { Component } from 'react'
import Md from './md/start.md'
import Markdown from '../../components/markdown'
export default class Start extends Component {
	render() {
		return (
			<div>
				{Markdown({ content: Md })}
			</div>
		)
	}
}
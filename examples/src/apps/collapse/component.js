import React, { Component } from 'react'
import Example from '../../components/example'
import Markdown from '../../components/markdown'

import example1Md from './md/example1.md'
import Example1 from './example/example1'

import readmeMd from './md/readme.md'


export default class Demo extends Component {
	render() {
		return (
			<div>
				<Example
					title='示例一：折叠面板'
					content={<Example1 />}
					doc={example1Md}
				/>

				{Markdown({ content: readmeMd })}
			</div>
		)
	}

}
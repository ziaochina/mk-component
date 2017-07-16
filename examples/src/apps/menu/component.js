import React, { Component } from 'react'
import Example from '../../components/example'
import Markdown from '../../components/markdown'

import example1Md from './md/example1.md'
import Example1 from './example/example1'

import example2Md from './md/example2.md'
import Example2 from './example/example2'

import readmeMd from './md/readme.md'


export default class Demo extends Component {
	render() {
		return (
			<div>
				<Example
					title='示例一：垂直菜单'
					content={<Example1 />}
					doc={example1Md}
				/>

				<Example
					title='示例二：横向菜单'
					content={<Example2 />}
					doc={example2Md}
				/>

				{Markdown({ content: readmeMd })}
			</div>
		)
	}

}
import React, { Component } from 'react'
import { Upload, Button, Icon } from 'mk-component'

export default class Example1 extends Component {
	render() {
		const props = {
			name: 'file',
			action: '//jsonplaceholder.typicode.com/posts/',
			headers: {
				authorization: 'authorization-text',
			}
		}

		return (
			<Upload {...props}>
				<Button>
					<Icon type="upload" /> Click to Upload
		    	</Button>
			</Upload>
		)
	}
}
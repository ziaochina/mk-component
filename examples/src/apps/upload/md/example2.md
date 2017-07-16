```javascript
import React, { Component } from 'react'
import { Upload, Button, Icon, Modal } from 'mk-component'

export default class Example1 extends Component {
	state = {
		fileList: [{
			uid: -1,
			name: 'xxx.png',
			status: 'done',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		}]
	}


	handlePreview = (file) => {
		let previewImage = file.url || file.thumbUrl
		Modal.show({
			children: <img alt="example" style={{ width: '100%' }} src={previewImage} />,
			footer: null
		})
	}

	handleChange = ({ fileList }) => {
		this.setState({ fileList })
	}

	render() {

		const { fileList } = this.state

		const uploadButton = (
			<div>
				<Icon type="plus" />
				<div className="ant-upload-text">Upload</div>
			</div>
		)

		return (
			<div className="clearfix">
				<Upload
					action="//jsonplaceholder.typicode.com/posts/"
					listType="picture-card"
					fileList={fileList}
					onPreview={this.handlePreview}
					onChange={this.handleChange}
				>
					{fileList.length >= 3 ? null : uploadButton}
				</Upload>
			</div>
		)
	}
}
```
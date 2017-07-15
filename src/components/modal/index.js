import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Modal } from 'antd'
import info from './info'
import error from './error'
import success from './success'
import warning from './warning'
import confirm from './confirm'

class ModalComponent extends Component {
	state = {
	}

	constructor(props) {
		super(props)
		this.setOkListener = this.setOkListener.bind(this)
		this.setCancelListener = this.setCancelListener.bind(this)
	}


	setOkListener(cb) {
		this.setState({ okListener: cb })
	}

	setCancelListener(cb) {
		this.setState({ cancelListener: cb })
	}


	async handleOk() {
		let listener = this.state.okListener, ret

		if (listener) {
			ret = await listener()
			if (ret === false) {
				return
			}
		}

		this.props.onOk && this.props.onOk(ret)
	}

	async handleCancel() {
		let listener = this.state.cancelListener, ret

		if (listener) {
			ret = await listener()
			if (ret === false) {
				return
			}
		}

		this.props.onCancel && this.props.onCancel(ret)
	}

	render() {
		let { children, ...otherProps } = this.props

		return (
			<Modal
				visible
				{...this.props}
				onOk={::this.handleOk}
	onCancel = {::this.handleCancel }
	/>
 		)
}
}

ModalComponent.newInstance = (props) => {
	return {
		show(properties) {
			const div = document.createElement('div')

			return new Promise((resolve, reject) => {
				let handleCancel = (ret) => {
					ReactDOM.unmountComponentAtNode(div)
					try {
						document.body.removeChild(div)
					}
					catch (err) { }
					resolve(ret || false)
				}

				let handleOk = (ret) => {
					ReactDOM.unmountComponentAtNode(div)
					try {
						document.body.removeChild(div)
					}
					catch (err) { }
					resolve(ret || true)
				}

				const props = properties || {}
				document.body.appendChild(div)

				ReactDOM.render(
					<ModalComponent
						visible
						maskClosable={false}
						{...props}
						onCancel={handleCancel}
						onOk={handleOk} />
					, div)

			})
		}
	}
}

let m = window.__Modal

if (!m) {
	m = ModalComponent.newInstance()
	window.__Modal = m
}

m.info = info
m.success = success
m.error = error
m.warning = warning
m.confirm = confirm

export default m
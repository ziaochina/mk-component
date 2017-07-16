import React, { Component } from 'react'
import { Toast, Button } from 'mk-component'

export default class Example1 extends Component {
	render() {
		return (
			<div>
				<Button onClick={() => Toast.info('This is a message of info')}>
					Info
				</Button>
				<br />
				<br />
				<Button onClick={() => Toast.success('This is a message of success')} >
					Success
				</Button>
				<br />
				<br />
				<Button onClick={() => Toast.error('This is a message of error')}>
					Error
	    		</Button>
				<br />
				<br />
				<Button onClick={() => Toast.warning('This is a message of warning')}>
					Warning
	    		</Button>
				<br />
				<br />
				<Button onClick={() => Toast.loading('This is a message of loading')}>
					loading
	    		</Button>

			</div>
		)
	}
}
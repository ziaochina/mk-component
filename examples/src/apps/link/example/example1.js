import React, { Component } from 'react'
import { Link } from 'mk-component'

export default class Example1 extends Component {

	handleClick = () => {
		console.log('link')
	}

	render() {
		return (
			<div>
				<Link onClick={this.handleClick}>this is a link!</Link>
			</div>
		)
	}
}
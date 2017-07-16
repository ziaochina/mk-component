import React, { Component } from 'react'
import { Pagination } from 'mk-component'

export default class Example1 extends Component {
	render() {
		return (
			<div>
				<Pagination defaultCurrent={1} total={50} />
				<br />
				<Pagination defaultCurrent={6} total={500} />
				<br />
				<Pagination showSizeChanger defaultCurrent={3} total={500} />
			</div>
		)
	}
}
import React, { Component } from 'react'
import { Input } from 'mk-component'

const Search = Input.Search

export default class Example1 extends Component {

	render() {
		return (
			<div>
				<Input placeholder="Basic usage" />
				<br />
				<br />
				<Input placeholder="regex" type='text' pattern="[a-z]*" />
				<br />
				<br />
				<Search
					placeholder="input search text"
					style={{ width: 200 }}
					onSearch={value => console.log(value)}
				/>
				<br />
				<br />
				<Input type="textarea" placeholder="Autosize height based on content lines" autosize={{ minRows: 2, maxRows: 6 }} />
			</div>
		)
	}
}
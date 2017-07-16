import React, { Component } from 'react'
import { Anchor } from 'mk-component'

const { Link } = Anchor

export default class Example1 extends Component {
	render() {
		return (
			<div id='anchor-example'>
				<Anchor >
					<Link href="#anchor-example" title="Example" />
					<Link href="#api" title="API">
						<Link href="#anchor-props" title="Anchor Props" />
						<Link href="#link-props" title="Link Props" />
					</Link>
				</Anchor>
			</div>
		)
	}
}
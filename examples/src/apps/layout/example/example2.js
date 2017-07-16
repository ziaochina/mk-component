import React, { Component } from 'react'
import { Layout } from 'mk-component'

export default class Example2 extends Component {
	render() {
		return (
			<Layout height={200}>
				<Layout height={50} justifyContent='center' alignItems='center' style={{ backgroundColor: '#eee' }}>header</Layout>
				<Layout direction='row' justifyContent='center' alignItems='stretch'>
					<Layout width={100} justifyContent='center' alignItems='center' style={{ backgroundColor: 'antiquewhite' }}>left</Layout>
					<Layout justifyContent='center' alignItems='center' style={{ backgroundColor: 'aliceblue' }}>content</Layout>
				</Layout>
				<Layout height={50} justifyContent='center' alignItems='center' style={{ backgroundColor: '#eee' }}>footer</Layout>
			</Layout>
		)
	}
}
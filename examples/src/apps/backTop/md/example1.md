```javascript
import React, { Component } from 'react'
import { BackTop } from 'mk-component'

export default class Example1 extends Component {
	render() {
		return (
			<div>
				<BackTop />
				Scroll down to see the bottom-right
			    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
				button.
		  	</div>
		)
	}
}
```
```javascript
import React, { Component } from 'react'
import { Checkbox } from 'mk-component'

const CheckboxGroup = Checkbox.Group

export default class Example2 extends Component {
	handleChange(checkedValues) {
		console.log('checked = ', checkedValues)
	}

	render() {
		const plainOptions = ['Apple', 'Pear', 'Orange']
		return (
			<div>
				<CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={::this.handleChange} />
		  	</div>
		)
	}
}
```
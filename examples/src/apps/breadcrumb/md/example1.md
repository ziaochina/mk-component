```javascript
import React,{Component} from 'react'
import { Breadcrumb  } from 'mk-component'

export default class Example1 extends Component {
	render() {
		return (
			<Breadcrumb>
		    	<Breadcrumb.Item>Home</Breadcrumb.Item>
		    	<Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
		    	<Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
		    	<Breadcrumb.Item>An Application</Breadcrumb.Item>
		  	</Breadcrumb>
		)
	}
}
```
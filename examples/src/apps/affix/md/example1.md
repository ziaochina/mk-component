```javascript
import React,{Component} from 'react'

import { Affix, Button } from 'mk-component'

export default class Example1 extends Component {
	render() {
		return (
			<div>
		 		<Affix target={()=>document.querySelector('#main')}>
			      <Button type="primary">Affix top</Button>
			    </Affix>
			    <br />
			    <br />
			    <Affix target={()=>document.querySelector('#main')} offsetBottom={0}>
			      <Button type="primary">Affix bottom</Button>
			    </Affix>
		  	</div>
		)
	}
}
```
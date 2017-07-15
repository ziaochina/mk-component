```javascript
//当前例子没厨房，他针对的滚动栏貌似是body上，我overflow设置hidden所以没效果
import React,{Component} from 'react'
import { Anchor  } from 'mk-component'

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
```
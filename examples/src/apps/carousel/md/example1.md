```javascript
//js 文件
import React, { Component } from 'react'
import { Carousel } from 'mk-component'
import './style1.less'

export default class Example1 extends Component {
	handleChange(a, b, c) {
		console.log(a, b, c)
	}
	render() {
		return (
			<div style={{ width: 300, height: 180 }}>
				<Carousel afterChange={this.handleChange}>
					<div><h3>1</h3></div>
					<div><h3>2</h3></div>
					<div><h3>3</h3></div>
					<div><h3>4</h3></div>
				</Carousel>
			</div>
		)
	}
}

//less 文件
.ant-carousel .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  color: #fff;
  overflow: hidden;
}
```
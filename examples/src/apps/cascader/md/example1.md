```javascript
import React, { Component } from 'react'
import { Cascader } from 'mk-component'

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}]

export default class Example1 extends Component {

  handleChange(value) {
    console.log(value)
  }

  render() {
    return (
      <div>
        <Cascader style={{ width: 300 }} options={options} onChange={this.handleChange} placeholder="Please select" />
      </div>
    )
  }
}
```
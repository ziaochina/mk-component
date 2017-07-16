import React,{Component} from 'react'
import aboutMd from './md/about.md'
import Markdown from '../../components/markdown'
export default class About extends Component{
	render(){
		return (
			<div>
				{Markdown({content:aboutMd})}
			</div>
		)
	}
}
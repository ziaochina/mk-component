import React, { Component } from 'react'
import { AppLoader } from 'mk-app-loader'
import { Icon, Menu } from 'mk-component'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import './style.less'



export default class RootComponent extends Component {


	handleMenuClick = (e) => {
		this.props.setCurrentAppPath(`${e.key}`)
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	handleGithubClick = () => {
		window.open("https://github.com/ziaochina/mk-component")
	}

	render() {
		let currentAppPath = this.props.payload.get('currentAppPath') || 'about'
		return (
			<div className='app-root'>
				<div className='app-root-header'>
					<div className='app-root-header-left'>
						<h1>mk-componnet</h1>
					</div>
					<div className='app-root-header-right'>
						<Icon type='github' onClick={this.handleGithubClick} />
					</div>
				</div>
				<div className='app-root-content'>
					<div className='app-root-content-left'>
						{this.getMenu()}
					</div>
					<div className='app-root-content-main' id='main'>
						{currentAppPath ? <AppLoader name={currentAppPath} /> : null}
					</div>
				</div>

			</div>
		)
	}

	getMenu() {
		return (
			<Menu theme='dark' mode="inline" defaultSelectedKeys={['about']} defaultOpenKeys={['components']} onClick={this.handleMenuClick}>
				<Menu.Item key="about" >关于</Menu.Item>
				<Menu.Item key="start" >开始使用</Menu.Item>
				<SubMenu key="components" title="组件">
					<Menu.Item key="layout">Layout 布局</Menu.Item>
					<Menu.Item key="icon">Icon 图标</Menu.Item>
					<Menu.Item key="input">Input 输入框</Menu.Item>
					<Menu.Item key="select">Select 选择框</Menu.Item>
					<Menu.Item key="datePicker">DatePicker 日期</Menu.Item>
					<Menu.Item key="checkbox">Checkbox 多选框</Menu.Item>
					<Menu.Item key="radio">Radio 单选框</Menu.Item>
					<Menu.Item key="cascader">Cascader 级联选择</Menu.Item>
					<Menu.Item key="button">Button 按钮</Menu.Item>
					<Menu.Item key="dropdown">Dropdown 下拉</Menu.Item>
					<Menu.Item key="link">Link 链接</Menu.Item>
					<Menu.Item key="switch">Switch 开关</Menu.Item>
					<Menu.Item key="rate">Rate 评分</Menu.Item>
					<Menu.Item key="slider">Slider 滑动输入条</Menu.Item>
					<Menu.Item key="upload">Upload 上传</Menu.Item>
					<Menu.Item key="transfer">Transfer 穿梭框</Menu.Item>
					<Menu.Item key="datagrid">DataGrid 数据网格</Menu.Item>
					<Menu.Item key="table">Table 表格</Menu.Item>
					<Menu.Item key="form">Form 表单</Menu.Item>
					<Menu.Item key="menu">Menu 菜单</Menu.Item>
					<Menu.Item key="card">Card 卡片</Menu.Item>
					<Menu.Item key="collapse">Collapse 折叠面板</Menu.Item>
					<Menu.Item key="tabs">Tabs 标签页</Menu.Item>
					<Menu.Item key="tree">Tree 树</Menu.Item>
					<Menu.Item key="treeSelect">TreeSelect 树选择框</Menu.Item>
					<Menu.Item key="toast">Toast 轻提示</Menu.Item>
					<Menu.Item key="modal">Modal 对话框</Menu.Item>
					<Menu.Item key="alert">Alert 警告提示</Menu.Item>
					<Menu.Item key="notification">Notification 通知</Menu.Item>
					<Menu.Item key="popconfirm">Popconfirm 气泡确认框</Menu.Item>
					<Menu.Item key="affix">Affix 固钉</Menu.Item>
					<Menu.Item key="anchor">Anchor 瞄点</Menu.Item>
					<Menu.Item key="backTop">BackTop 回到顶部</Menu.Item>
					<Menu.Item key="breadcrumb">Breadcrumb 面包屑</Menu.Item>
					<Menu.Item key="badge">Badge 徽标数</Menu.Item>
					<Menu.Item key="carousel">Carousel 走马灯</Menu.Item>
					<Menu.Item key="popover">Popover 气泡卡片</Menu.Item>
					<Menu.Item key="tooltip">Tooltip 文字提示</Menu.Item>
					<Menu.Item key="spin">Spin 加载中</Menu.Item>
					<Menu.Item key="progress">Progress 进度条</Menu.Item>
					<Menu.Item key="timeline">Timeline 时间轴</Menu.Item>
					<Menu.Item key="pagination">Pagination 分页</Menu.Item>
					<Menu.Item key="steps">Steps 步骤条</Menu.Item>
					<Menu.Item key="echarts">Echarts 图表</Menu.Item>
				</SubMenu>
			</Menu>
		)
	}
}
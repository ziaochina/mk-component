import { config, start } from 'mk-app-loader'
import './assets/style/index.less'
import './assets/style/markdown.css'
import './assets/style/hljs.css'

import about from './apps/about/index.js'
import affix from './apps/affix/index.js'
import alert from './apps/alert/index.js'
import anchor from './apps/anchor/index.js'
import backTop from './apps/backTop/index.js'
import badge from './apps/badge/index.js'
import breadcrumb from './apps/breadcrumb/index.js'
import button from './apps/button/index.js'
import card from './apps/card/index.js'
import carousel from './apps/carousel/index.js'
import cascader from './apps/cascader/index.js'
import checkbox from './apps/checkbox/index.js'
import collapse from './apps/collapse/index.js'
import datagrid from './apps/datagrid/index.js'
import datePicker from './apps/datePicker/index.js'
import dropdown from './apps/dropdown/index.js'
import echarts from './apps/echarts/index.js'
import form from './apps/form/index.js'
import icon from './apps/icon/index.js'
import input from './apps/input/index.js'
import layout from './apps/layout/index.js'
import link from './apps/link/index.js'
import menu from './apps/menu/index.js'
import modal from './apps/modal/index.js'
import notification from './apps/notification/index.js'
import pagination from './apps/pagination/index.js'
import popconfirm from './apps/popconfirm/index.js'
import popover from './apps/popover/index.js'
import progress from './apps/progress/index.js'
import radio from './apps/radio/index.js'
import rate from './apps/rate/index.js'
import root from './apps/root/index.js'
import select from './apps/select/index.js'
import slider from './apps/slider/index.js'
import spin from './apps/spin/index.js'
import _start from './apps/start/index.js'
import steps from './apps/steps/index.js'
import _switch from './apps/switch/index.js'
import table from './apps/table/index.js'
import tabs from './apps/tabs/index.js'
import timeline from './apps/timeline/index.js'
import toast from './apps/toast/index.js'
import tooltip from './apps/tooltip/index.js'
import transfer from './apps/transfer/index.js'
import tree from './apps/tree/index.js'
import treeSelect from './apps/treeSelect/index.js'
import upload from './apps/upload/index.js'

const apps = {
	[about.name]:about,	
	[affix.name]:affix,	
	[alert.name]:alert,	
	[anchor.name]:anchor,	
	[backTop.name]:backTop,	
	[badge.name]:badge,	
	[breadcrumb.name]:breadcrumb,	
	[button.name]:button,	
	[card.name]:card,	
	[carousel.name]:carousel,	
	[cascader.name]:cascader,	
	[checkbox.name]:checkbox,	
	[collapse.name]:collapse,	
	[datagrid.name]:datagrid,	
	[datePicker.name]:datePicker,	
	[dropdown.name]:dropdown,	
	[echarts.name]:echarts,	
	[form.name]:form,	
	[icon.name]:icon,	
	[input.name]:input,	
	[layout.name]:layout,	
	[link.name]:link,	
	[menu.name]:menu,	
	[modal.name]:modal,	
	[notification.name]:notification,	
	[pagination.name]:pagination,	
	[popconfirm.name]:popconfirm,	
	[popover.name]:popover,	
	[progress.name]:progress,	
	[radio.name]:radio,	
	[rate.name]:rate,	
	[root.name]:root,	
	[select.name]:select,	
	[slider.name]:slider,	
	[spin.name]:spin,	
	[_start.name]:_start,	
	[steps.name]:steps,	
	[_switch.name]:_switch,	
	[table.name]:table,	
	[tabs.name]:tabs,	
	[timeline.name]:timeline,	
	[toast.name]:toast,	
	[tooltip.name]:tooltip,	
	[transfer.name]:transfer,	
	[tree.name]:tree,	
	[treeSelect.name]:treeSelect,	
	[upload.name]:upload,	
}

config({
	apps,
	targetDomId: 'app',
	startAppName: 'root'
})

start()
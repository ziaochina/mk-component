import React from 'react'
import Echarts from 'echarts-for-react'
import echarts from 'echarts'
import macarons from './macarons'
import shine from './shine'

function EcharsComponent(props) {
	return <Echarts {...props} />
}

EcharsComponent.registerTheme = echarts.registerTheme

echarts.registerTheme('shine',shine)
echarts.registerTheme('macarons',macarons)

export default EcharsComponent
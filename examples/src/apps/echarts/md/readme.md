# Echarts 图表

基于[echarts-for-react](https://github.com/hustcc/echarts-for-react)

## API

### Props

| 参数        | 说明             | 类型               | 默认值       |
|-------------|------------------|--------------------|--------------|
| option     | the echarts option config, [see more](http://echarts.baidu.com/option.html#title)   | object | -        |
| notMerge     | when setOption, not merge the data, default is false. [see more](http://echarts.baidu.com/api.html#echartsInstance.setOption)  | object | -        |
| lazyUpdate     | when setOption, not merge the data, default is false. [see more](http://echarts.baidu.com/api.html#echartsInstance.setOption)  | object | -        |
| style     | the style of echarts div. object, default is {height: '300px'}  | object | -        |
| className     | the class of echarts div. you can setting the css style of charts by class name.  | string | -        |
| theme     | the theme of echarts. string, should registerTheme before use it ([theme object format]( https://github.com/ecomfe/echarts/blob/master/theme/dark.js)).   | string | -        |
| onChartReady     |when the chart is ready, will callback the function with the echarts object as it's paramter.  | function | -        |
| loadingOption     |the echarts loading option config, [see more](http://echarts.baidu.com/api.html#echartsInstance.showLoading) | object | -        |
| showLoading     |when the chart is rendering, show the loading mask. | boolean | -        |
| onEvents     |binding the echarts event, will callback with the echarts event object, and the echart object as it's paramters. [see more](http://echarts.baidu.com/api.html#events) | function | -        |
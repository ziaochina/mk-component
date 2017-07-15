# Icon 图标

图标组件，对antd icon增加了一些功能

## 新增或修改的API

| 参数      | 说明             | 类型      | 默认值  |
|----------|------------------|----------|--------|
| fontFamily | 字体，不设置使用antd的字体，设置'mkicon'使用本组件的字体库，自定义字体也支持 | string | - |
| showStyle | 显示风格, 设置了显示风格, hover会有颜色变化 | string:`showy` `softly` `primary` `normal` | - |
| disabled | 是否置灰 | bool | - |
| visible | 是否显示 | bool | - |

## 自定义字体步骤

1、增加less文件引入字体,并定义各种图标样式

```javascript
//font.less

@font-face {
    font-family: '???';
    src: url('./???.eot'); /* IE9*/
    src: url('./???.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./???.woff') format('woff'), /* chrome、firefox */
    url('./???.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('./mk/???.svg#iconfont') format('svg'); /* iOS 4.1- */
}

.mkicon-???:before { content: "\e???"; }
```

2、主js中引入这个less

```javascript
import 'font.less'
```

3、使用

```javascript
<Icon type='???' fontFamily='???' style={style}/>
//type:图标名
//fontFamily:字体
```




## ant Icon API

由于图标字体本质上还是文字，可以使用 `style` 和 `className` 设置图标的大小和颜色。

[详情请点击查看官方](https://ant.design/components/icon-cn/)


| 参数      | 说明             | 类型      | 默认值  |
|----------|------------------|----------|--------|
| type | 图标类型 | string | - |
| spin | 是否有旋转动画 | boolean | false |
| style | 样式 | object | - |
| className | 样式名 | string | - |
| onClick | 点击事件 | Function | - |
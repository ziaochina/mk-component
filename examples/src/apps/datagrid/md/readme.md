# DataGrid 数据网格

DataGrid 基于[fixed-data-table](http://facebook.github.io/fixed-data-table/),做了一些修改

重要的改动有：

- 高度，宽度属性不可用，使用父亲组件高宽自适用，父组件需要是flex布局
- 只能使用 columns属性设置列，原来使用children
- 提供新的Cell和TextCell, Cell不再使用table布局改flex
- 增加了启用序号列功能
- 增加了可编辑，启用增删行功能


## API

| 参数             | 说明                                         | 类型     | 默认值                          |
|------------------|----------------------------------------------|----------|---------------------------------|
| columns        | 列   | Array<ReactNode> | - |
| rowsCount        | 行数   | Number | - |
| headerHeight | 头部高度 | Number   | - |
| rowHeight         | 行高                               | Number | -                              |
| groupHeaderHeight | 头部Group高度 | Number   | - |
| footerHeight | 脚部高度 | Number   | - |
| heightFromRowsCount | 高度是否通过行数计算 | boolean   | - |
| readonly | 只读属性，readonly为false,增行删行功能不能用,行事件也不可用 | boolean   | - |
|scrollToRow | 滚到第几行 | Number | -|
|scrollToColumn | 滚到第几列 | Number | -|
|enableSequence | 启用序号列,启用会自动给追加一个序号列在DataGrid最前面 | boolean | -|
|startSequence | 开始序号 | Number | 1|
|enableAddDelrow | 启用增删行功能,表格readonly===false可用,启用后鼠标移到行上,序号单元格中出现增删图标 | boolean | - |
|sequenceFooter | 序号列Footer | ReactNode | - |
|onAddrow | 增行事件 | function | - |
|onDelrow | 删行事件 | function | - |
|onRowClick | 行点击事件 | function | - |
|onRowDoubleClick | 行双击事件 | function | - |
|onRowMouseEnter | 行进入事件 | function | - |
|onRowMouseLeave | 行离开事件 | function | - |
|onScrollEnd | 滚到末尾事件 | function | - |	
|className | 样式名 | string| -|

其他属性参考官网

### Column

| 参数             | 说明                                         | 类型     | 默认值                          |
|------------------|----------------------------------------------|----------|---------------------------------|
| fixed        | 是否固定   | boolean | - |
| header        | 头单元格   | ReactNode or Function | - |
| cell        | 行单元格   | ReactNode or Function | - |
| footer        | 脚单元格   | ReactNode or Function | - |
| columnKey        | 唯一键   | string | - |
| width        | 宽度   | Number | - |
| minWidth        | 最小宽度   | Number | - |
| maxWidth        | 最大宽度   | Number | - |
| flexGrow        | 列宽是否自动适用  | Number | - |

### Cell

| 参数             | 说明                                         | 类型     | 默认值                          |
|------------------|----------------------------------------------|----------|---------------------------------|
| align        | 布局 `left` `center` `right`   | string | - |
| className        | 样式名   | string | - |
| style        | 样式   | Object | - |

### TextCell
适用于只有值得cell,没有children节点

| 参数             | 说明                                         | 类型     | 默认值                          |
|------------------|----------------------------------------------|----------|---------------------------------|
| align        | 布局 `left` `center` `right`，设置后内容会根据设置来布局   | string | - |
| value        | 值   | string  | - |
| dataType        | 值数据类型 `float` `bool`,设置为bool（true内容会显示为是），设置为float可以使用precision  | string |  string |
| precision        | 数值精度   | Number | - |
| enableTooltip        | 是否启用文字提示   | boolean | - |
| enableEllipsis        | 是否启用省略，如果文字溢出   | boolean | - |
| sand        | 打磨函数，可以加工cell的输出结果   | function | - |
| className        | 样式名   | string | - |
| style        | 样式   | Object | - |
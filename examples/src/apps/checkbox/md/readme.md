# Checkbox 多选框

## antd Checkbox API

[详情请点击查看官方](https://ant.design/components/checkbox-cn/)

### Checkbox

| 参数      | 说明             | 类型      | 默认值  |
|----------|------------------|----------|--------|
| checked | 指定当前是否选中 | boolean  | false |
| defaultChecked | 初始是否选中 | boolean | false |
| onChange | 变化时回调函数 | Function(e:Event) | - |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false |

### Checkbox Group

| 参数      | 说明             | 类型      | 默认值  |
|----------|------------------|----------|--------|
| defaultValue | 默认选中的选项 | string[] | [] |
| value | 指定选中的选项| string[] | [] |
| options  | 指定可选项 | string[] | [] |
| onChange | 变化时回调函数 | Function(checkedValue) | - |

# Form 表单


## API

### Form


| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| layout | 表单布局 | 'horizontal' or 'vertical' | 'vertical' |



### Form.Item


| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|-----------------------------------------|-----------|--------|
| label | label 标签的文本 | string or ReactNode | -  |
| labelCol | label 标签布局，如 `{style:{width: 100}}` | object | - |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol |  object| - |
| help | 提示信息，如不设置 | string or ReactNode | |
| extra | 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 | string or ReactNode | |
| required | 是否必填 | boolean | false |
| validateStatus | 校验状态，可选：'success' 'warning' 'error' 'validating' | string |  |
| hasFeedback | 配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用 | boolean | false  |
| colon | 配合 label 属性使用，表示是否显示 label 后面的冒号 | boolean | true |


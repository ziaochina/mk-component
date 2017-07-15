# Modal 对话框

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

## API

使用下面方法使用

- `Modal.show`
- `Modal.info`
- `Modal.success`
- `Modal.error`
- `Modal.warning`
- `Modal.confirm`

注意：以上函数使用async await返回调用后，会返回一个结果true or false。

### Modal.show入参属性

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| visible    | 对话框是否可见 | boolean          | 无           |
| confirmLoading | 确定按钮 loading | boolean    | 无           |
| title      | 标题           | string or ReactNode | 无           |
| closable   | 是否显示右上角的关闭按钮 | boolean    | true        |
| width      | 宽度           | string or number | 520           |
| footer     | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | string or ReactNode | 确定取消按钮 |
| okText     | 确认按钮文字    | string           | 确定       |
| cancelText | 取消按钮文字    | string           | 取消       |
| maskClosable | 点击蒙层是否允许关闭 | boolean   | true       |
| style | 可用于设置浮层的样式，调整浮层位置等 | object   | - |
| wrapClassName | 对话框外层容器的类名 | string   | - |

### 其他方法入参属性

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| title      | 标题           | string or ReactNode | 无           |
| content    | 内容           | string or ReactNode | 无           |
| width      | 宽度           | string or number | 416           |
| iconType   | 图标 Icon 类型    | string | question-circle |
| okText     | 确认按钮文字    | string           | 确定       |
| cancelText | 取消按钮文字    | string           | 取消       |
| maskClosable | 点击蒙层是否允许关闭 | Boolean   | `false`    |



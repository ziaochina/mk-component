# Notification 通知

全局展示通知提醒信息。

## 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

- 较为复杂的通知内容。
- 带有交互的通知，给出用户下一步的行动点。
- 系统主动推送。

## API

- `Notification.open(config)`
- `Notification.success(config)`
- `Notification.error(config)`
- `Notification.info(config)`
- `Notification.warning(config)`
- `Notification.warn(config)`

注意：以上函数使用async await返回调用后，会返回一个结果true or false。

config 参数如下：

| 参数          | 说明                                       | 类型                | 默认值      |
| ----------- | ---------------------------------------- | ----------------- | -------- |
| message     | 通知提醒标题，必选                                | string or ReactNode | -        |
| description | 通知提醒内容，必选                                | string or ReactNode | -        |
| className   | 自定义 CSS class                            | string            | -        |
| style       | 自定义内联样式                                  | Object            | -        |
| btn         | 自定义关闭按钮                                  | ReactNode         | -        |
| icon        | 自定义图标                                    | ReactNode         | -        |
| key         | 当前通知唯一标志                                 | string            | -        |
| duration    | 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭            | number            | 4.5      |
| placement   | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | string            | topRight |

还提供了一个全局配置方法，在调用前提前配置，全局一次生效。

- `Notification.config(options)`

```js
Notification.config({
  placement: 'bottomRight',
  bottom: 50,
  duration: 3,
});
```
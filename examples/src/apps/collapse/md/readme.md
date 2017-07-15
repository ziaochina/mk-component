# collapse 折叠面板

可以折叠/展开的内容区域。

## antd collapse API

[详情请点击查看官方](https://ant.design/components/collapse-cn/)

### Collapse

| 参数             | 说明                                         | 类型     | 默认值                          |
|------------------|----------------------------------------------|----------|---------------------------------|
| activeKey        | 当前激活 tab 面板的 key| string[] or string   | 默认无，accordion模式下默认第一个元素|
| defaultActiveKey | 初始化选中面板的 key | string   | 无 |
| onChange         | 切换面板的回调                               | Function | 无                              |


### Collapse.Panel

| 参数 | 说明             | 类型                    | 默认值 |
|------|------------------|-------------------------|--------|
| key  | 对应 activeKey   | string                  | 无     |
| header | 面板头内容 | string or ReactNode | 无     |

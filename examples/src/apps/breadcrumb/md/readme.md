# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## ant Breadcrumb API

[详情请点击查看官方](https://ant.design/components/breadcrumb-cn/)

| 参数      | 说明                              | 类型              |  可选值 | 默认值 |
|-----------|-----------------------------------|-----------------|---------|--------|
| routes    | router 的路由栈信息               | object[]             |         | -      |
| params    | 路由的参数                        | object            |         | -      |
| separator | 分隔符自定义                      | string or ReactNode |         | '/'    |
| itemRender | 自定义链接函数，和 react-router 配置使用 | (route, params, routes, paths) => ReactNode | | - |

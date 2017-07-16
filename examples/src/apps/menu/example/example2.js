import React, { Component } from 'react'
import { Menu, Icon } from 'mk-component'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default class Example1 extends Component {

  handleClick(e) {
    console.log('click ', e)
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a>Navigation Four - Link</a>
        </Menu.Item>
      </Menu>
    )
  }
}
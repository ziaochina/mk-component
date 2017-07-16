```javascript
import React, { Component } from 'react'
import { Dropdown, Menu, Icon, Button } from 'mk-component'

const ButtonGroup = Button.Group

const menu = (
	<Menu >
		<Menu.Item key="1">1st menu item</Menu.Item>
		<Menu.Item key="2">2nd menu item</Menu.Item>
		<Menu.Item key="3">3d menu item</Menu.Item>
	</Menu>
)

export default class Example2 extends Component {
	render() {
		return (

			<div>
				<Dropdown.Button type="showy" overlay={menu}>
					Dropdown
    			</Dropdown.Button>
				<br />
				<br />
				<Dropdown.Button type="softly" overlay={menu}>
					Dropdown
    			</Dropdown.Button>
				<br />
				<br />
				<Dropdown.Button type="primary" overlay={menu}>
					Dropdown
    			</Dropdown.Button>
				<br />
				<br />
				<Dropdown.Button overlay={menu}>
					Dropdown
    			</Dropdown.Button>
				<br />
				<br />
				<Dropdown overlay={menu}>
					<Button type="showy" style={{ marginLeft: 8 }}>
						Button <Icon type="down" />
					</Button>
				</Dropdown>
				<br />
				<br />
				<Dropdown overlay={menu}>
					<Button type="" style={{ marginLeft: 8 }}>
						Button <Icon type="down" />
					</Button>
				</Dropdown>
			</div>

		)
	}
}
```
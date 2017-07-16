```javascript
import React, { Component } from 'react'
import { Button, Icon } from 'mk-component'
const ButtonGroup = Button.Group;

export default class Example3 extends Component {
	render() {
		let style = { marginRight: 10 }
		return (
			<div>
				<h4>Basic</h4>
				<ButtonGroup style={style}>
					<Button>Cancel</Button>
					<Button type="showy">OK</Button>
				</ButtonGroup>

				<ButtonGroup style={style}>
					<Button disabled>L</Button>
					<Button disabled>M</Button>
					<Button disabled>R</Button>
				</ButtonGroup>

				<ButtonGroup>
					<Button type="primary">L</Button>
					<Button>M</Button>
					<Button>M</Button>
					<Button type="dashed">R</Button>
				</ButtonGroup>

				<h4 style={{ marginTop: 20 }}>With Icon</h4>
				<ButtonGroup style={style}>
					<Button type="softly">
						<Icon type="left" />Go back
			      </Button>
					<Button type="softly">
						Go forward<Icon type="right" />
					</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button type="showy" icon="cloud" />
					<Button type="softly" icon="cloud-download" />
				</ButtonGroup>
			</div>
		)
	}
}
```
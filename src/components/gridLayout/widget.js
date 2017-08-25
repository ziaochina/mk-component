import { Card } from 'antd'
import classNames from 'classnames'

function WidgetComponent(props){
    const className = classNames({
		'mk-grid-layout-widget': true,
		[props.className]: !!props.className
	})
    return <Card {...props} className={className} />
}

export default WidgetComponent
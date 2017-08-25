import GridLayout from 'react-grid-layout'
import Widget from './widget'
const { WidthProvider, Responsive } = GridLayout


function GridLayoutComponent(props) {
	const className = classNames({
		'mk-grid-layout': true,
		[props.className]: !!props.className
	})
	return <GridLayout {...props} className={className} />
}

function ResponsiveGridLayoutComponent(props){
    const className = classNames({
        'mk-grid-layout': true,
        'mk-grid-layout-responsive':true,
		[props.className]: !!props.className
	})
	return <Responsive {...props} className={className} />
}

GridLayoutComponent.WidthProviderGridLayout = WidthProvider(GridLayoutComponent)

GridLayoutComponent.WidthProviderResponsive = WidthProvider(ResponsiveGridLayoutComponent)

GridLayout.Widget = Widget

export default GridLayoutComponent
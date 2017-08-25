import GridLayout from 'react-grid-layout'

const { WidthProvider, Responsive } = GridLayout

GridLayout.WidthProviderGridLayout = WidthProvider(GridLayout)

GridLayout.WidthProviderResponsive = WidthProvider(Responsive)

export default GridLayout
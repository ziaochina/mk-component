module.exports = {
	name: 'echarts',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'echarts')
	}
}
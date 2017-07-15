module.exports = {
	name: 'apps/echarts',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-echarts')
	}
}
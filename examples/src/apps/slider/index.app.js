module.exports = {
	name: 'apps/slider',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-slider')
	}
}
module.exports = {
	name: 'apps/about',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-about')
	}
}
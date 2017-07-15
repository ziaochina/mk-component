module.exports = {
	name: 'apps/breadcrumb',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-breadcrumb')
	}
}
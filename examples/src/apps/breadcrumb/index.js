module.exports = {
	name: 'breadcrumb',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'breadcrumb')
	}
}
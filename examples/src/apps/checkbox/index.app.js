module.exports = {
	name: 'apps/checkbox',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-checkbox')
	}
}
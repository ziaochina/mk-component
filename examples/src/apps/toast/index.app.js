module.exports = {
	name: 'apps/toast',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-toast')
	}
}
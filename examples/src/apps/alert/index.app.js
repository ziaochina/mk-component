module.exports = {
	name: 'apps/alert',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-alert')
	}
}
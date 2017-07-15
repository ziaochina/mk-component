module.exports = {
	name: 'apps/start',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-start')
	}
}
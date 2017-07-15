module.exports = {
	name: 'apps/backTop',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-backTop')
	}
}
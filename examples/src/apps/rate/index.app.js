module.exports = {
	name: 'apps/rate',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-rate')
	}
}
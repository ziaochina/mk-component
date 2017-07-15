module.exports = {
	name: 'apps/spin',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-spin')
	}
}
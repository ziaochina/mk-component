module.exports = {
	name: 'apps/collapse',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-collapse')
	}
}
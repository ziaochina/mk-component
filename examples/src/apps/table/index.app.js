module.exports = {
	name: 'apps/table',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-table')
	}
}
module.exports = {
	name: 'apps/datagrid',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-datagrid')
	}
}
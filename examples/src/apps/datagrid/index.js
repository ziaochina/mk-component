module.exports = {
	name: 'datagrid',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'datagrid')
	}
}
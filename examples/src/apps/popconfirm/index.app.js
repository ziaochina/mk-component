module.exports = {
	name: 'apps/popconfirm',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-popconfirm')
	}
}
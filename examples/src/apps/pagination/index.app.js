module.exports = {
	name: 'apps/pagination',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-pagination')
	}
}
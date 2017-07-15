module.exports = {
	name: 'apps/select',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-select')
	}
}
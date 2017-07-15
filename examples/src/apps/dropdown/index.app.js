module.exports = {
	name: 'apps/dropdown',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-dropdown')
	}
}
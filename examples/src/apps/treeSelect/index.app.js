module.exports = {
	name: 'apps/treeSelect',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-treeSelect')
	}
}
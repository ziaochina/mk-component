module.exports = {
	name: 'apps/tree',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-tree')
	}
}
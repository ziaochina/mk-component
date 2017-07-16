module.exports = {
	name: 'treeSelect',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'treeSelect')
	}
}
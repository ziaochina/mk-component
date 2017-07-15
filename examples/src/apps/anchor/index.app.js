module.exports = {
	name: 'apps/anchor',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-anchor')
	}
}
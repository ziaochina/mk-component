module.exports = {
	name: 'apps/progress',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-progress')
	}
}
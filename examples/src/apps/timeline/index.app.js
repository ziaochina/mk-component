module.exports = {
	name: 'apps/timeline',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-timeline')
	}
}
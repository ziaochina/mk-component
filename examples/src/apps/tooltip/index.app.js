module.exports = {
	name: 'apps/tooltip',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-tooltip')
	}
}
module.exports = {
	name: 'apps/icon',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-icon')
	}
}
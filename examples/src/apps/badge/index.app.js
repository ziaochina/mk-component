module.exports = {
	name: 'apps/badge',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-badge')
	}
}
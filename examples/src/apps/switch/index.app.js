module.exports = {
	name: 'apps/switch',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-switch')
	}
}
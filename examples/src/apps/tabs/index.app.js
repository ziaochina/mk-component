module.exports = {
	name: 'apps/tabs',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-tabs')
	}
}
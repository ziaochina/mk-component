module.exports = {
	name: 'apps/menu',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-menu')
	}
}
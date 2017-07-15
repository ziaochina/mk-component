module.exports = {
	name: 'apps/layout',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-layout')
	}
}
module.exports = {
	name: 'apps/link',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-link')
	}
}
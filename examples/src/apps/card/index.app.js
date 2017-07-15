module.exports = {
	name: 'apps/card',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-card')
	}
}
module.exports = {
	name: 'apps/button',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-button')
	}
}
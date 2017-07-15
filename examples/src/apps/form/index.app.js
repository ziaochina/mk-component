module.exports = {
	name: 'apps/form',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-form')
	}
}
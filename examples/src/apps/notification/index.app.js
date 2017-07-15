module.exports = {
	name: 'apps/notification',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-notification')
	}
}
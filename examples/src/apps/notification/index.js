module.exports = {
	name: 'notification',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'notification')
	}
}
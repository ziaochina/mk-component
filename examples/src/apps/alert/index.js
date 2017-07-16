module.exports = {
	name: 'alert',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'alert')
	}
}
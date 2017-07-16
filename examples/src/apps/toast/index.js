module.exports = {
	name: 'toast',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'toast')
	}
}
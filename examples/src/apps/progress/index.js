module.exports = {
	name: 'progress',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'progress')
	}
}
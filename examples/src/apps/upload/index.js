module.exports = {
	name: 'upload',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'upload')
	}
}
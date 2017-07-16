module.exports = {
	name: 'tooltip',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'tooltip')
	}
}
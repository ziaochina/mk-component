module.exports = {
	name: 'slider',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'slider')
	}
}
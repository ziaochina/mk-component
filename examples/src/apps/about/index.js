module.exports = {
	name: 'about',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'about')
	}
}
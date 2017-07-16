module.exports = {
	name: 'icon',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'icon')
	}
}
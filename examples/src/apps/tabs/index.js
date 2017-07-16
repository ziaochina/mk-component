module.exports = {
	name: 'tabs',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'tabs')
	}
}
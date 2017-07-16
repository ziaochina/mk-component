module.exports = {
	name: 'menu',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'menu')
	}
}
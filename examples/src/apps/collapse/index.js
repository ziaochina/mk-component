module.exports = {
	name: 'collapse',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'collapse')
	}
}
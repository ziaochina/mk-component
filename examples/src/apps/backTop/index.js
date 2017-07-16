module.exports = {
	name: 'backTop',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'backTop')
	}
}
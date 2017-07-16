module.exports = {
	name: 'badge',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'badge')
	}
}
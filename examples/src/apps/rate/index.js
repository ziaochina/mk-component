module.exports = {
	name: 'rate',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'rate')
	}
}
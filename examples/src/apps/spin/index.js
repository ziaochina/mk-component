module.exports = {
	name: 'spin',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'spin')
	}
}
module.exports = {
	name: 'switch',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'switch')
	}
}
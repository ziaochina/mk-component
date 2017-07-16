module.exports = {
	name: 'timeline',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'timeline')
	}
}
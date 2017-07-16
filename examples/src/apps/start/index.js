module.exports = {
	name: 'start',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'start')
	}
}
module.exports = {
	name: 'modal',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'modal')
	}
}
module.exports = {
	name: 'checkbox',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'checkbox')
	}
}
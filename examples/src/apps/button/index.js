module.exports = {
	name: 'button',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'button')
	}
}
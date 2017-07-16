module.exports = {
	name: 'card',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'card')
	}
}
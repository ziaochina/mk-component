module.exports = {
	name: 'form',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'form')
	}
}
module.exports = {
	name: 'dropdown',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'dropdown')
	}
}
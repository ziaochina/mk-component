module.exports = {
	name: 'pagination',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'pagination')
	}
}
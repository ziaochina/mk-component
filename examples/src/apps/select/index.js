module.exports = {
	name: 'select',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'select')
	}
}
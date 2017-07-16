module.exports = {
	name: 'anchor',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'anchor')
	}
}
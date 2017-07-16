module.exports = {
	name: 'link',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'link')
	}
}
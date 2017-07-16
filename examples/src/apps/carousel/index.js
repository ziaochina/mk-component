module.exports = {
	name: 'carousel',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'carousel')
	}
}
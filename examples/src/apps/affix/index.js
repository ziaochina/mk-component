module.exports = {
	name: 'affix',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'affix')
	}
}
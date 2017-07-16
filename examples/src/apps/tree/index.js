module.exports = {
	name: 'tree',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'tree')
	}
}
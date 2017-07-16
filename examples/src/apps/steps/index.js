module.exports = {
	name: 'steps',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'steps')
	}
}
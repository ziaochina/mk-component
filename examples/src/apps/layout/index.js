module.exports = {
	name: 'layout',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'layout')
	}
}
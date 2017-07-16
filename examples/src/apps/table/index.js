module.exports = {
	name: 'table',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'table')
	}
}
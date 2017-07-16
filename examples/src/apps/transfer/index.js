module.exports = {
	name: 'transfer',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'transfer')
	}
}
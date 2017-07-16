module.exports = {
	name: 'popconfirm',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'popconfirm')
	}
}
module.exports = {
	name: 'cascader',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'cascader')
	}
}
module.exports = {
	name: 'radio',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'radio')
	}
}
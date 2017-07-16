module.exports = {
	name: 'input',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'input')
	}
}
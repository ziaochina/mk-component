module.exports = {
	name: 'popover',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'popover')
	}
}
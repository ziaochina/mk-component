module.exports = {
	name: 'datePicker',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'))
		}, 'datePicker')
	}
}
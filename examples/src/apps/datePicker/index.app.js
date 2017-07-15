module.exports = {
	name: 'apps/datePicker',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-datePicker')
	}
}
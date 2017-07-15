module.exports = {
	name: 'apps/popover',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-popover')
	}
}
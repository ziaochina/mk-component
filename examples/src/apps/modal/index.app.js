module.exports = {
	name: 'apps/modal',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-modal')
	}
}
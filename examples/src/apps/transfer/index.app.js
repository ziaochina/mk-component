module.exports = {
	name: 'apps/transfer',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-transfer')
	}
}
module.exports = {
	name: 'apps/upload',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-upload')
	}
}
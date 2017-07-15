module.exports = {
	name: 'apps/affix',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-affix')
	}
}
module.exports = {
	name: 'apps/cascader',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-cascader')
	}
}
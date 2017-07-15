module.exports = {
	name: 'apps/steps',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-steps')
	}
}
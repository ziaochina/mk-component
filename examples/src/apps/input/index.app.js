module.exports = {
	name: 'apps/input',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-input')
	}
}
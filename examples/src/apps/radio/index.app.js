module.exports = {
	name: 'apps/radio',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-radio')
	}
}
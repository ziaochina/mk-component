module.exports = {
	name: 'apps/root',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'), require('./action'), require('./reducer'))
		}, 'apps-root')
	}
}
module.exports = {
	name: 'apps/carousel',
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./index'))
		}, 'apps-carousel')
	}
}
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

// Global Styles Loader
function addStyleResource(rule) {
	rule.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [
				path.resolve(__dirname, './src/assets/scss/core/*.scss'),
			],
		})
}

module.exports = {
	siteName: 'Iratxe Yañez',

	transformers: {
		remark: {
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			anchorClassName: 'icon icon-link'
		}
	},

	plugins: [{
		use: '@gridsome/source-filesystem',
		options: {
			path: '_posts/work/**/*.md',
			typeName: 'WorkPost',
			remark: {}
		}
	}],

	chainWebpack: config => {
		// Load variables for all vue-files
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
		types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
	}
}

import adapter from '@sveltejs/adapter-static'
import * as path from 'path';
import { imagetools } from 'vite-imagetools'

const dev = process.env.NODE_ENV === 'development'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/cartographie/graticule'
		},
		prerender: {
			// en attendant fix de https://github.com/sveltejs/kit/issues/4528
			// pas de crawl
			crawl: false,
			default: true,
			// onError: 'continue'
		},
		// si "always" => /about devient /about/index.html
		trailingSlash: 'always',

		vite: () => ({
			plugins: [imagetools()],
	
			resolve: {
				alias: {
					$img: path.resolve('src/images')
				}
			}
		})
	},
};

export default config;

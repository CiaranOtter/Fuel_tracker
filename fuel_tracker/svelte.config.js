import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'public',
			assets: 'public',
			fallback: undefined,
			precompress: false, 
			strict: false
		}),
		alias: {
			$classes: './src/lib/classes',
			$components: './src/lib/components',
			$helpers: './src/lib/helpers'
		}
	}
};

export default config;

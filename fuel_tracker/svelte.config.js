import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$classes: './src/lib/classes',
			$components: './src/lib/components'
		}
	}
};

export default config;

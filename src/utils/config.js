/*
 This file determines which environment we're in, and provides the app with the appropriate config
 */

export const defaults = {
	port: 1234,
};

export const dev = {};

export const prod = {};

const config = () => {
	switch (process.env.NODE_ENV) {
		case 'production':
			return prod;
		default:
			return dev;
	}
};

export default {
	...defaults,
	...config(),
};

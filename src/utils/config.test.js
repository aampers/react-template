import config, { defaults, prod } from './config';

/*
  config is defined when the environment is set, and so testing it in test/dev is weird. it would 
  require functionalizing the config option itself, which I think detracts value. the benefit added
  by adding tests for config is extremely low, and so I've opted out of them.
 */
describe('src/utils/config.js', () => {
	it('if no environment variables are set, prod config is returned.', () => {
		expect(config).toEqual({
			...defaults,
			...prod,
		});
	});
});

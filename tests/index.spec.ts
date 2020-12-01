import * as proccessEnv from './../src';

describe('processEnv', () => {
  it('should export processEnv & loadEnvConfig methods', () => {
    const exports = Object.keys(proccessEnv);

    expect(exports).toEqual(['processEnv', 'loadEnvConfig']);
  });
});

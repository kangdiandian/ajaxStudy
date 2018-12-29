
export const ENV = {
  dev: {
    baseUrl: 'http://m.dev.iqianggou.com',
    apiBaseUrl: 'https://m.devapi.iqianggou.com',
  },
  beta: {
    baseUrl: 'https://m.beta.iqianggou.com',
    apiBaseUrl: 'https://m.betaapi.iqianggou.com',
  },
  prod: {
    host: 'm.iqianggou.com',
    baseUrl: 'https://m.iqianggou.com',
    apiBaseUrl: 'https://m.api.iqianggou.com',
  }
}

let baseEnv = {
  port: 8001,
  baseUrl: '',
  apiBaseUrl: '',
  publicPath: ''
}

function creatEnv(opts = {}) {
  const { env = 'prod' } = opts;
  return Object.assign({}, baseEnv, ENV[env], opts);
};

let mini = creatEnv({
  env: 'prod'
});
export default  mini;

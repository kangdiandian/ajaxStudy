import _request from './request'
import env from './env'
import stringify from './stringUtil';

const regHttp = /^https?/i;

function dealRequest(url, requestHeader, success, fail, data) {
  const originUrl = regHttp.test(url) ? url : `${env.apiBaseUrl}${url}`;
  _request(originUrl, requestHeader, success, fail, data);
};

const modelApis = {
  appConfig: '/api/appconfig',
  login: 'POST /api/user/register_and_login',
};

const commonPms = {
  zone_id: 21,
  channel: 'zidingyi',
};
const commonHeaders = {
  version: '5.5.3',
  zoneid: 21,
  'Content-Type': 'application/x-www-form-urlencoded',
};

var models = Object.keys(modelApis).reduce((api, key) => {
  var val = modelApis[key];
  var [url, method = 'GET'] = val.split(/\s+/).reverse();
  let data = '';
  switch (method) {
    case 'POST':
      api[key] = (params, success, fail) => {
        const header = Object.assign(getCommonHeaders(), {
          requestMethod: method
        });
        data = stringify(params);
        return dealRequest(url, header, success, fail, data);
      }
      break;
    case 'GET':
      api[key] = (params, success, fail) => {
        const header = Object.assign(getCommonHeaders(), {
          requestMethod: method
        });
        url = `${url}?${this.stringify(params)}`;
        return dealRequest(url, header, success, fail, data);
      }
      break;
  }
  return api;
}, {});

function setCommonHeaders(options) {
  return Object.assign(commonHeaders, options);
};
function getCommonHeaders() {
  return {...commonHeaders};
};
models.setCommonHeaders = setCommonHeaders;
models.getCommonHeaders = getCommonHeaders;

export default models

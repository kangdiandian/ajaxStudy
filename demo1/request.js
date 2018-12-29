function ajaxRequest(url, requestHeader, success, fail, data) {
  let request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject();
  }
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      dealData(request.responseText, success, fail);
    }
  };
  const method = requestHeader.requestMethod;
  delete requestHeader['requestMethod'];
  request.open(method, url, true);

  if (JSON.stringify(requestHeader) !== '{}') {
    for (const key in requestHeader) {
      request.setRequestHeader(key, requestHeader[key]);
    }
  }
  request.send(data);
};

function dealData(res, success, fail) {
  success(res);
};

const request = ajaxRequest;

export default request;

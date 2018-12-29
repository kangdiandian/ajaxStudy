import "babel-polyfill";
import api from './api.config'

window.loadAjax = function() {
  api.login({
    mobile: 15901753750,
    password: 'kll15901753750',
  }, (res) => {
    console.log(res);
  }, (err) => {

  });
  // 老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象
  // var ajax = new ActiveXObject();
  // var ajax = new XMLHttpRequest();
  // ajax.onreadystatechange = () => {
  //   if (ajax.readyState == 4 && ajax.status == 200) {
  //     that.dealData(ajax.responseText);
  //   }
  // };
  // // ajax.open('GET', 'https://m.api.iqianggou.com/api/appconfig?channel=h5&platform=3', true);
  // // ajax.send();
  // ajax.open('POST', 'https://m.api.iqianggou.com/api/user/register_and_login', true);
  // ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // ajax.send('mobile=15901753750&password=kll15901753750');
};

// function dealData(res) {
//   console.log(res);
// };

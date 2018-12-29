function stringify(params) {
  const temp = params;
  const arr = [];
  for (const key in temp) {
    if (!params[key] && params[key] !== 0 && params[key] !== false) {
      delete temp[key];
    } else {
      arr.push(`${key}=${temp[key]}`);
    }
  }
  return arr.join('&');
};

export default stringify;

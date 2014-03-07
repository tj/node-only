module.exports = function(obj, keys){
  obj = obj || {};
  if ('string' == typeof keys) keys = keys.split(/ +/);
  return keys.reduce(function(ret, key){
    if (undefined === obj[key]) return ret;
    ret[key] = obj[key];
    return ret;
  }, {});
};

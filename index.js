module.exports = function(obj, keys){
  obj = obj || {};
  if ('string' === typeof keys) keys = keys.split(/ +/);

  if (Array.isArray(obj)) {
    return obj.map(function(object) { return only(object, keys) });
  } else {
    return only(obj, keys);
  }
};

var only = function only(obj, keys) {
  return keys.reduce(function(ret, key){
    ret[key] = obj[key];
    return ret;
  }, {});
};
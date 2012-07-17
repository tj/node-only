
var only = require('..');

var obj = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com',
  _id: '12345'
};

var expected = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com'
};

describe('only(obj, keys)', function(){
  describe('given an array', function(){
    it('should return only the whitelisted properties', function(){
      only(obj, ['name', 'email', 'last']).should.eql(expected);
    })
  })

  describe('given an string', function(){
    it('should return only the whitelisted properties', function(){
      only(obj, 'name email last').should.eql(expected);
    })
  })

  describe('when obj is missing', function(){
    it('should default', function(){
      only(null, 'foo').should.eql({ foo: undefined });
    })
  })
})
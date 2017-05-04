// test/server-test.js

var assert = require('chai').assert;
var request = require('request');
var app = require('../server');

describe('Server', function(){
  before(function(done){
      this.port = 9876;
      this.server = app.listen(this.port, function(err, result){
        if (err) { return done(err); }
        done();
      });

      this.request = request.defaults({
        baseUrl: 'http://localhost:9876/'
      });
  });

  after(function(){
    this.server.close();
  });

  it('should exist', function(){
    assert(app);
  });

  describe('GET /', function(){
    it('should return a 200', function(done){
      this.request.get('/', function(error, response){
        if (error) { return done(error) }
        assert.equal(response.statusCode, 200);
        done();
      });
    });
  });
});











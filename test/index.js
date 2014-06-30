var expect = require('chai').expect,
    graphument = require('..');

describe('graphument', function() {
  it('should say hello', function(done) {
    expect(graphument()).to.equal('Hello, world');
    done();
  });
});

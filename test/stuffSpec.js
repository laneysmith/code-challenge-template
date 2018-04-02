process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
chai.use(chaiHttp);

describe('stuff', function() {
    it('should return 200 on /stuff GET', function(done) {
      chai.request(server)
        .get('/stuff')
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body.coolThing.should.equal('respond with a resource');
        //   res.body.should.be.a('array');
        //   res.body[0].should.have.property('_id');
        //   res.body[0].should.have.property('name');
        //   res.body[0].should.have.property('lastName');
        //   res.body[0].name.should.equal('Bat');
        //   res.body[0].lastName.should.equal('man');
          done();
        });
    });  
  });
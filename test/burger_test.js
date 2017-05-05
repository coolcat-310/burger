var chai = require('chai');
chai.should();
var burger = require('../lib/burgers');

describe('Burgers', function(){
   it('should return all burgers', function(done){
       burger.getAllBurgers(function(res){
           console.log(res);
           res.should.be.an('object');
           res[0].should.have.all.keys("burger_name",
           "devoured",
           "id",
           "myDate");
           done();
       })
   })
});
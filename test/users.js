var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var request = require('superagent').agent();
var id;
describe('post: "localhost:3002/apis/users" API', function() {

    let response;
    let body;
    before((done)=>{
        request
		.post("localhost:3002/apis/users").send({"name":"Nitesh jatav","profession":"Software Engineer","address":{"house_no":849,"landmark":"Near SBI ATM","citty":"Gurgaon","country":"India"},"contact":{"primary_phone":"8860163029","secondary_phone":"9795816929","sky_username":"niteshpsit","email":"niteshpsit@gmail.com"},"image":"/img/img.jpg","languages_know":["English","Hindi"]})
		.end(function(err, res){
			response = res;
            body = res.body;
            id = res.body._id
            delete res.body._id
            delete res.body.__v
			done();
		})
    })
    
    it('should be equal to 200', () => {
        expect(response.statusCode).to.equal(200)
    })
    it('should not be null', () => {
        expect(body).to.not.be.null
    })
    it('should not be undefined', () => {
        expect(body).to.not.be.undefined
    })
    it('should be an Object', () => {
        assert.isObject(body, "should is an object");
    })
    it('should have all keys ["name","profession","address","contact","image","languages_know"]', () => {
        expect(body).to.have.all.keys(["name","profession","address","contact","image","languages_know"])
    })
    it('should be equal to "Nitesh jatav"', () => {
        expect(body.name).to.equal("Nitesh jatav")
    })
    it('should be equal to "Software Engineer"', () => {
        expect(body.profession).to.equal("Software Engineer")
    })
    it('should be an Object', () => {
        assert.isObject(body.address, "should is an object");
    })
    it('should be an Object', () => {
        assert.isObject(body.contact, "should is an object");
    })
    it('should be equal to "/img/img.jpg"', () => {
        expect(body.image).to.equal("/img/img.jpg")
    })
    it('should be an Array', () => {
        assert.isArray(body.languages_know, "should is an array");
    })
});

describe('get: "localhost:3002/apis/users" API', function() {

    let response;
    let body;
    before((done)=>{
        request
		.get("localhost:3002/apis/users")
		.end(function(err, res){
			response = res;
            body = res.body;
			done();
		})
    })
    
    it('should be equal to 200', () => {
        expect(response.statusCode).to.equal(200)
    })
    it('should not be null', () => {
        expect(body).to.not.be.null
    })
    it('should not be undefined', () => {
        expect(body).to.not.be.undefined
    })
    it('should be an Array', () => {
        assert.isArray(body, "should is an array");
    })
    it('should be an Object', () => {
        assert.isObject(body[0], "should is an object");
    })
    it('should have all keys ["_id","name","profession","image","__v","languages_know","contact","address"]', () => {
        expect(body[0]).to.have.all.keys(["_id","name","profession","image","__v","languages_know","contact","address"])
    })

});

describe('Delete: "localhost:3002/apis/users/:id" API', function() {

    let response;
    let body;
    before((done)=>{
        request
		.delete("localhost:3002/apis/users/"+id)
		.end(function(err, res){
			response = res;
            body = res.body;
			done();
		})
    })
    
    it('should be equal to 200', () => {
        expect(response.statusCode).to.equal(200)
    })
    it('should not be null', () => {
        expect(body).to.not.be.null
    })
    it('should not be undefined', () => {
        expect(body).to.not.be.undefined
    })
    it('should be an Object', () => {
        assert.isObject(body, "should is an object");
    })
    it('should have all keys ["_id","name","profession","image","__v","languages_know","contact","address"]', () => {
        expect(body).to.have.all.keys(["_id","name","profession","image","__v","languages_know","contact","address"])
    })
    it('should be delete correct document', () => {
        expect(body._id).to.equal(id)
    })
});
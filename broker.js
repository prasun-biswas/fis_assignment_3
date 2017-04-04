var express =require('express'); 
var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var logger = require('morgan');
var request = require('request');
var Js2Xml = require("js2xml").Js2Xml;
// var validator = require('xsd-schema-validator');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/sendMessage', function(req, res){
	res.end();
});




request.post('http://localhost:3000/RTU/SimCNV8/events/Z2_Changed/notifs',{form:{destUrl:"http://localhost:4445/notifs"}}, function(err,httpResponse,body){});
request.post('http://localhost:3000/RTU/SimCNV8/events/Z3_Changed/notifs',{form:{destUrl:"http://localhost:4445/notifs"}}, function(err,httpResponse,body){});
request.post('http://localhost:3000/RTU/SimCNV8/events/Z5_Changed/notifs',{form:{destUrl:"http://localhost:4445/notifs"}}, function(err,httpResponse,body){});
	

http.listen(4444, function(){
  console.log('The BROKER is listening on :4444');
});






  
var express =require('express'); 
var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var logger = require('morgan');
var request = require('request');
var Js2Xml = require("js2xml").Js2Xml;
var validator = require('xsd-schema-validator');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/sendMessage', function(req, res){
	res.end();
});

app.post('/notifs', function(req, res){
	console.log(req.body);
	if(req.body.id == "Z2_Changed")
	{
		//cleint 1
		request.post('http://localhost:4445',{form:{event:req.body}}, 
		function(err,httpResponse,body){});
		var MachineResponse = req.body;
		var js2xml =new Js2Xml("MachineResponse", MachineResponse);
		var MachineResponseXmlStr= js2xml.toString();
		//console.log(JSON.stringify(req.body.id));
		//console.log(MachineResponseXml);
		var MachineResponseXsd="MachineResponseXsd.xsd";
		validator.validateXML(MachineResponseXmlStr,MachineResponseXsd,function (err,result) {
if(err){ console.log('error found in validation process');
console.log(err);
process.exit(1);}
console.log('xml file validated')
		})

		
	}
	else if(req.body.id == "Z3_Changed")
	{
		
		//cleint 1
		request.post('http://localhost:4445',{form:{event:req.body}}, 
		function(err,httpResponse,body){});
		
		//cleint 2
		request.post('http://localhost:4446',{form:{event:req.body}}, 
		function(err,httpResponse,body){});
	}
	else if(req.body.id == "Z5_Changed")
	{
		
		//cleint 2
		request.post('http://localhost:4446',{form:{event:req.body}}, 
		function(err,httpResponse,body){});
	}
	res.end();
});   


request.post('http://localhost:3000/RTU/SimCNV8/events/Z2_Changed/notifs',{form:{destUrl:"http://localhost:4444/notifs"}}, function(err,httpResponse,body){});
request.post('http://localhost:3000/RTU/SimCNV8/events/Z3_Changed/notifs',{form:{destUrl:"http://localhost:4444/notifs"}}, function(err,httpResponse,body){});
request.post('http://localhost:3000/RTU/SimCNV8/events/Z5_Changed/notifs',{form:{destUrl:"http://localhost:4444/notifs"}}, function(err,httpResponse,body){});
	

http.listen(4444, function(){
  console.log('The BROKER is listening on :4444');
});






  
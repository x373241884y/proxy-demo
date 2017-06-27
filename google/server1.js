/**
 * Created by toor on 17-6-27.
 */

var express = require('express');
var request = require('request');
var app = express();

app.use(function(req, res){
	//modify the url in any way you want
	var newurl = 'https://google.com/'+req.url;
	req.pipe(request(newurl)).pipe(res);
});

app.listen(3000);
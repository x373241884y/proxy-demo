var http = require('http');
var request = require('request');
http.createServer(function (req, res) {
	var newurl = 'https://google.com/'+req.url;
	req.pipe(request(newurl)).pipe(res);
}).listen(3000);
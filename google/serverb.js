var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
http.createServer(function (req, res) {
	proxy.web(req, res, {changeOrigin: true,
		target: {
			protocol: 'https:',
			host: 'www.google.com',
			port: 443,
			hostname: 'www.google.com'
		}});
}).listen(3000);
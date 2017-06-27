var app = require('express')();

var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();

app.use(function (req, res, next) {
	apiProxy.web(req, res, {
		changeOrigin: true,
		target: {
			protocol: 'https:',
			host: 'www.google.com',
			port: 443,
			hostname: 'www.google.com'
		}
	});
});
app.listen(3000);
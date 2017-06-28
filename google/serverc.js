var proxy = require('http-proxy-middleware');
var http = require('http');

http.createServer(proxy({target: 'https://www.google.com/', changeOrigin: true})).listen(3000);
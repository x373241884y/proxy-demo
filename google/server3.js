var proxy = require('http-proxy-middleware');

var app = require('express')();

app.use(proxy({target: 'https://www.google.com/', changeOrigin: true}));
app.listen(3000);
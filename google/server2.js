var proxy = require('express-http-proxy');

var app = require('express')();

app.use(proxy('https://www.google.com'));

app.listen(3000);
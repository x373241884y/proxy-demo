const Koa = require('koa');
const proxy = require('http-proxy-middleware');
const app = new Koa();

app.use(proxy({target: 'https://www.google.com/', changeOrigin: true}));
app.listen(3000);

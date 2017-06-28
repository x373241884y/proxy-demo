const Koa = require('koa');
const proxy = require('koa-proxy');
const convert = require('koa-convert');
const app = new Koa();

app.use(convert(proxy({
	host: 'https://www.google.com.hk', // 目标站 点
	jar: true, // 转发 cookie
	followRedirect: false, // co-request 的参数，不跟随跳转
})));
app.listen(3000);
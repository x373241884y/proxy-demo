/**
 * Created by toor on 17-6-26.
 */

const Koa = require('koa');
const proxy = require('koa-proxy');
const convert = require('koa-convert')
const app = new Koa();
const zlib = require('zlib');

app.use(async function (ctx, next) {
	await next();
	if (this.path === '/' || this.path === '/search') {
		const data = await zlib.gunzip.bind(zlib, this.body);
		const str = data.toString('utf-8').replace(/<body([^>]*)>/, `<body$1>
        <div style="font-size: 14px; text-align: center; padding: 3px 10px;">Powered By <a href="https://www.lets-ss.com">lets-ss.com</a></div>`);
		this.body = await zlib.gzip.bind(zlib, str);
	}
});

app.use(convert(proxy({
	host: 'https://www.google.com.hk', // 目标站 点
	jar: true, // 转发 cookie
	followRedirect: false, // co-request 的参数，不跟随跳转
})));
app.listen(3000);

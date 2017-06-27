const Koa = require('koa');
let app = new Koa();
var proxy = require('http-proxy').createProxyServer();

app.use(async function (ctx, next) {
	// yield to a thunk
	await proxy.web(ctx.req, ctx.res,{changeOrigin: true,
		target: {
			protocol: 'https:',
			host: 'www.google.com',
			port: 443,
			hostname: 'www.google.com'
		}})
});
app.listen(3000);
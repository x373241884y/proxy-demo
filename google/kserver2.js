const Koa = require('koa');
let app = new Koa();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();

app.use(function (ctx, next) {
	return new Promise((resolve, reject) => {
		apiProxy.web(ctx.req, ctx.res, {
			changeOrigin: true,
			target: {
				protocol: 'https:',
				host: 'www.google.com',
				port: 443,
				hostname: 'www.google.com'
			}
		},err=>{
			if(err){
				reject(err);
			}else{
				resolve(next());
			}
		});
	})
});
app.listen(3000);
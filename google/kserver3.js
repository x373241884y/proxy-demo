const Koa = require('koa');
const proxy = require('http-proxy-middleware');
const app = new Koa();

app.use(function (ctx, next) {
	return new Promise((resolve, reject) => {
		proxy({target: 'https://www.google.com/', changeOrigin: true})(ctx.req, ctx.res, err => {
			if (err){
				reject(err);
			} else {
				resolve(next());
			}
		});
	})
});
app.listen(3000);

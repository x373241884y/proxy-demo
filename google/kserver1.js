const Koa = require('koa');
const app = new Koa();
const request = require('request');

app.use(function (ctx, next) {

	return new Promise(function (resolve, reject) {
		//modify the url in any way you want
		let newurl = 'https://google.com/' + ctx.req.url;
		let stream = ctx.req.pipe(request(newurl)).pipe(ctx.res);
		stream.on('finish', function () {
			resolve(next());
		}).on('error', function (err) {
			reject(err);
		})
	})
});
app.listen(3000);

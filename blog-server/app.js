//入口文件
const Koa = require('koa');
const app = new Koa();
const index = require('./routes/index');

app.use(index.routes(), index.allowedMethods());
//将 public 目录设置为静态资源目录
app.use(require('koa-static')(__dirname + '/public'));
//将 views 设置为默认模板目录 TODO:koa-views安装失败
// app.use(require('koa-views')(__dirname + '/views'));
app.listen(3000);
console.log('app started at port 3000...');
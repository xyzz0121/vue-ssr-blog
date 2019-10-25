/**
 * 路由
 */
const fs = require('fs');
const router = require('koa-router')()

router.get('/index', async (ctx, next) => {
 ctx.type = 'text/html';
 ctx.body = fs.createReadStream('./views/index.html');
});

 

module.exports = router
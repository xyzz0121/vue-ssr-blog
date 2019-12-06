/**
 * 路由
 */
const fs = require('fs');
const router = require('koa-router')()

router.get('/index', async (ctx, next) => {
    ctx.type = 'text/html';
    ctx.body = fs.createReadStream('./views/index.html');
});
router.get('/api/list', async (ctx, next) => {
    ctx.body = [{a:1}, {b:2}]
});



module.exports = router
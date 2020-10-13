let Koa = require('koa')
let  KoaRouter = require('koa-router')

const app = new Koa();
const router = new KoaRouter();

let homeData = require('./data/index.json')
router.get('/getHomeData',(ctx,next) => {
  ctx.body = homeData
})

app
.use(router.routes())
.use(router.allowedMethods())
app.listen('3001',() => {
  console.log('服务器启动');
	console.log('服务器地址：http://localhost:3001');
})
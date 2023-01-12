const Koa = require("koa");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const config = require("./config/default.js");
const { init: initDB } = require("./db");

// middleWares
const middleWares = require("./middlewares/index");

// routers
const routers = require("./routers/index");

const app = new Koa();
app.use(logger()).use(bodyParser());

// 挂载自定义中间件
middleWares.loadMiddleWares(app);

// 挂载路由
routers.loadRouters(app);

async function bootstrap() {
  await initDB();
  app.listen(config.port, () => {
    console.log("启动成功", config.port);
  });
}
bootstrap();

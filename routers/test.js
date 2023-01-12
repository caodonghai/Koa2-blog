const router = require("koa-router")();
const fs = require("fs");

const testPage = async (ctx) => {
  const html = fs.readFileSync("./views/index.html");
  ctx.type = 'text/html;charset=utf-8';
  ctx.body = html;
};

// 重置到文章页
router.get("/test", testPage);

module.exports = router;

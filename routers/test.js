const router = require("koa-router")();

const testPage = async (ctx) => {
  ctx.body = "HELLO KOA PROJECT";
};

// 重置到文章页
router.get("/", testPage);

module.exports = router;

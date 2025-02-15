const fs = require("fs");
const path = require("path");

const homePage = fs.readFileSync(
  path.join(__dirname, "../views/index.html"),
  "utf-8"
);

/**
 * 获取文件
 */
exports.getHomePage = async (ctx) => {
  ctx.body = homePage;
};

exports.getOpenId = async (ctx) => {
  if (ctx.request.headers["x-wx-source"]) {
    ctx.body = ctx.request.headers["x-wx-openid"];
  }
};
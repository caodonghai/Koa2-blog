const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config/default.js");

const { DATABASE, USERNAME, PASSWORD, HOST, PORT } = config.database;

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  HOST,
  PORT,
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
});

// 定义数据模型
const Counter = sequelize.define("Counter", {
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

const User = sequelize.define("User", {
  // 在这里定义模型属性
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
  },
  birthday: {
    type: DataTypes.DATEONLY,
  },
  meetTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  navigateTo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  music: {
    type: DataTypes.STRING,
  },
});

// 定义愿望清单数据模型
const WishList = sequelize.define("WishList", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  wishTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wishDesc: {
    type: DataTypes.TEXT,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plannedTime: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  // 实例化将自动将 complete 设置为 false (如果未设置)
  complete: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
});

// 定义愿望清单数据模型
const CountdownDays = sequelize.define("CountdownDays", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  repeat: {
    type: DataTypes.STRING,
  },
  theme: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isEndTime: { type: DataTypes.BOOLEAN, allowNull: false },
});

// 数据库初始化方法
async function init() {
  await Counter.sync({ alter: true });
  await WishList.sync({ alter: true });
  await CountdownDays.sync({ alter: true });
  await User.sync({ alter: true });
}

// 导出初始化方法和模型
module.exports = {
  init,
  Counter,
  WishList,
  User,
  CountdownDays,
};

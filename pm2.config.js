module.exports = {
  apps: [
    {
      name: "romantic_for_u",
      script: "./index.js",
      watch: true, // 是否监听文件变动然后重启
      ignore_watch: [
        // 不用监听的文件
        "node_modules",
        "logs",
      ],
      exec_mode: "cluster", // 应用启动模式，支持fork和cluster模式
      instances: 1, // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
      max_memory_restart: "1G", // 最大内存限制数，超出自动重启
      error_file: "./logs/app-err.log", // 错误日志文件
      out_file: "./logs/app-out.log", // 正常日志文件
      merge_logs: true, // 设置追加日志而不是新建日志
      log_date_format: "YYYY-MM-DD HH:mm:ss", // 指定日志文件的时间格式
      min_uptime: "60s", // 应用运行少于时间被认为是异常启动
      max_restarts: 30, // 最大异常重启次数，即小于min_uptime运行时间重启次数；
      autorestart: true, // 默认为true, 发生异常的情况下自动重启
      cron_restart: "", // crontab时间格式重启应用，目前只支持cluster模式;
      restart_delay: 4000,
    },
  ],
};

module.exports = {
  apps: [
    {
      name: 'website', // 应用名称
      script: './server/app.js', // 启动文件地址
      cwd: './', // 当前工作路径
      watch: [
        // 监控变化的目录，一旦变化，自动重启
        'dist'
      ],
      ignore_watch: [
        // 忽视这些目录的变化
        'node_modules'
      ],
      node_args: '--harmony', // node的启动模式
      env: {
        NODE_ENV: 'production' // 设置运行环境，此时process.env.NODE_ENV的值就是development
      },
      env_production: {
        NODE_ENV: 'production'
      },
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    }
  ]
}

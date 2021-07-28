const proxy = require('http-proxy-middleware')

// 文件用于配置批量的中间件

module.exports = function(app) {
    app.use(
        proxy("/api1",{ //遇见/api前缀的请求，就会触发该代理配置
            target:'http://localhost:5000', //请求转发给谁
            changeOrigin:true,//控制服务器收到的请求头与targer保持一致，一般加上避免一些问题
            pathRewrite:{'^/api1':""}//重写请求头讲请求头的api1替换掉
        }),
        proxy("/api2",{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':""}
        }),

    )
}
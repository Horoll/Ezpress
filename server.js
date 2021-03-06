//初始化express实例
var express = require('express');
var app = express();
//引入工具函数模块
var tools = require("./lib/tools");

//读取配置信息
var cof = tools.readJson("./config.json");

//注册body-parser中间件以解析请求
var bodyParser = require('body-parser');
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
// 解析 application/json
app.use(bodyParser.json()); 

//注册cookie-parser中间件，并且传入config.js中的cookie密钥
app.use(require('cookie-parser')(cof.credentials.cookieSecret));
//注册express-session中间件，并且传入config.js中的session配置
app.use(require('express-session')(cof.session));
//注册静态文件路径
app.use(express.static(__dirname + cof.staticPath));
//注册模版引擎
app.set('view engine',cof.template) ; 
//设置模板文件位置
app.set('views', __dirname + '/application/view') ;


//读取路由信息
var routerList  = tools.readJson("./route.json");
//注册控制器,并绑定相应路由
for(var route in routerList){
	app.use('/' + route, 
	require('./application/controller/' + routerList[route])
	);
}

//注册错误页面
// 定制 404 页面
app.use(function(req, res){
res.status(404);
res.render('404');
});
// 定制 500 页面
app.use(function(err, req, res, next){
console.error(err.stack);
res.status(500);
res.render('404');
});


//启动服务器
app.listen(cof.port, function () {
  console.log('Welcome to Ezpress!');
});
# Ezpress
A mini MVC framwork based on node.js-express

---

### 目录结构
>server.js：项目入口文件，一般情况不需要对server.js的代码做任何修改  
>config.json：配置文件，对项目参数进行配置  
>route.json：路由映射，把路由绑定到指定的控制器  
>lib：ezpress框架核心文件
>>tools.js：静态函数库，你可以把常用的函数写在这里，然后引入你的控制器文件中使用
>
>application：代码文件，大部分你写的代码文件都放在这里面   
>>controller：控制器文件，业务逻辑代码   
>>view：视图模版文件  
>>public:静态文件：.css，.js以及静态页面等   
>
>node_modules：express核心文件
>package.json：包依赖目录
>package_lock.json：项目依赖包安装时版本号目录
>

<br/>
### 启动Ezpress
进入项目目录，
命令行执行 `$ node server.js`
命令行显示 `Welcome to Ezpress!` 则Ezpress已经启动成功
然后在浏览器中输入 http://localhost:8000/ 以查看输出。
<br/>
### 开始你的项目 
打开route.json文件，可以看到其中已经预置了一个路由：`"":"index"`
这意味着当你访问 http://localhost:8000/ 时，ezpress会将路由转发给 /application/controller/index.js 文件   
放在/application/controller/ 下的文件被称作 **控制器** ,所有的业务逻辑代码都应写在控制器中。  
Ezpress的路由转发通过express框架的 express.Router实现，实际上，每个控制器就是一个express的Router模块。我们通过route.js中的信息，把路由与相对应的控制器绑定并注册进express实例。
<br/>
- 例：
我们先新建一个控制器：/application/controller/infoController.js，并且写入以下代码：

```
//info控制器
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('info page!');
});

router.get('/detail', function(req, res) {
  res.send('detail info!');
});

//模块外部接口
module.exports = router;
```
然后在route.json中注册一个新的路由：`"info":"infoController"`,意为将 /info 路由绑定到 infoController.js 控制器。  
当我们访问http://localhost:8000/info 时，执行第一个router.get('/',...)，浏览器显示 info page!  
当我们访问http://localhost:8000/info/detail 时，执行第二个router.get('/detail',...)，浏览器显示 detail info!  
我们只需要把业务逻辑代码写在控制器中的各个中间件及回调函数

*** 详细的路由、express.Router及中间件、回调函数的用法等请阅读express的文档**



### 系统配置
Ezpress的系统配置参数放在 config.json 中，以json格式保存
```
{
  "port":8000,//端口号，默认8000
  "staticPath":"/application/public",//静态文件存放路径

	//Ezpress采用express-session使用session
	//这里session内的参数会在注册express-session时传入，具体请参考express-session手册
  "session":{
	"secret":  "secret", 
    "resave" : "flase",
    "saveUninitialized": false,
    "cookie" : {
        "maxAge" : 864000
    }
  },
	//credentials：存放各种凭证
  "credentials":{
  	"cookieSecret":"GGSLMO7WQX"//cookie加密时使用的密钥
  }
}

```
修改配置文件时请严格按照json格式，并且不要写任何注释！json文件并不支持注释。
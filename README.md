# Ezpress
A mini MVC framwork based on node.js-express

---

**目录结构**
>server.js：项目入口文件，一般情况不需要对server.js的代码做任何修改  
>config.js：配置文件，对项目参数进行配置  
>router.js：路由映射，把路由绑定到指定的控制器  
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

**开始使用**
进入项目目录，
命令行执行 `$ node server.js`
命令行显示 `Welcome to Ezpress!` 则ezpress已经启动成功
然后在浏览器中输入 http://localhost:8000/ 以查看输出。


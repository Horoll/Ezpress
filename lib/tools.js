//tools：一些静态的工具函数

//将json文件解析成对象
exports.readJson = function(path){
	var fs = require('fs');
	var rec = fs.readFileSync(path);
	return JSON.parse(rec);
}

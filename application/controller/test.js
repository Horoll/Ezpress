//test控制器
var express = require('express');
var router = express.Router();
var util = require('util');

router.get('/', function(req, res) {
  res.send('test page!');
});


//测试cookie，session功能
router.get('/input',function(req,res){
	res.cookie('userId', req.query.id);//设置cookie
    req.session.userName = req.query.name;//设置session
    console.log(util.inspect(req.cookies.userId));
    console.log(util.inspect(req.session.userName));
	res.send(req.query.id + req.query.name);
});


//测试body-parser模块
//测试post参数
router.post('/testpost', function (req, res) {
	// 输出 JSON 格式
	var response = {
	"first_name":req.body.first_name,
	"last_name":req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});
//测试bodyParser.json
//...


//测试db模块
var dbCon = require('../../lib/database').dbCon();
//query
router.get('/db/query',function(req,res){
	dbCon.connect();
	var sql = 'SELECT * FROM user';

	dbCon.query(sql, function (err, results, fields) {
	if (err){
		console.log('[SELECT ERROR] - ',err.message);
		return;
		}
	re = results;
	console.log(results);
	res.send(results);
	});

	dbCon.end();
	console.log('over');
});

//模块外部接口
module.exports = router;
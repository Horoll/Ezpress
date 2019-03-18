//test控制器
var express = require('express');
var router = express.Router();
var util = require('util');

router.get('/', function(req, res) {
  res.send('info page!');
});

router.get('/detail', function(req, res) {
  res.send('detail info!');
});

router.get('/input',function(req,res){
	res.cookie('userId', req.query.id);
    req.session.userName = req.query.name;
    console.log(util.inspect(req.cookies.userId));
    console.log(util.inspect(req.session.userName));
	res.send(req.query.id + req.query.name);
});

//模块外部接口
module.exports = router;
//index控制器
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Hello Ezpress!');
});

//模块外部接口
module.exports = router;
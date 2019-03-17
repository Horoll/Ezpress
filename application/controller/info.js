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
var express = require('express');
var router = express.Router();

router.get('/room/list', function(req, res, next) {
  console.log(req.query)
  res.send('room/list - get');
});

router.get('/room/list2', function(req, res, next) {
  res.send('room/list2 - get');
});

module.exports = router;

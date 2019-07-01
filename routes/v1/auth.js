var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
  res.send('login - post');
});

router.delete('/logout', function(req, res, next) {
  res.send('logout - delete');
});


module.exports = router;

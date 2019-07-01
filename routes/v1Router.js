var express = require('express');
var router = express.Router();

/* var loginRouter = require('./login');
var logoutRouter = require('./logout');

router.use('/login', loginRouter);
router.use('/logout', logoutRouter); */

var authRouter = require('./v1/auth');
var roomRouter = require('./v1/room');


router.use('/', authRouter);

router.use('/', roomRouter);


module.exports = router;

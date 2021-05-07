var express = require('express');
var router = express.Router();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/login', loginRouter);

module.exports = router;

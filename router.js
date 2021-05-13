var express = require('express');
var router = express.Router();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);

module.exports = router;

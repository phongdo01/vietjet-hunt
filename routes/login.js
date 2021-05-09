var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const mongoose = require('mongoose');
  
  res.render('login');
});

module.exports = router;

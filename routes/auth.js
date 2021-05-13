require('dotenv').config()
var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

const { Users } = require('../models/Users');

const saltRounds = process.env.SALT_ROUNDS;
const myPlainTextPwd = process.env.MY_PLAIN_TEXT_PWD;

const loginFuntion = (req, res, next) => {
  res.render('auth/login', { title: process.env.TITLE });
}
const findUser = async ({ username, email }) => {
  const users = await Users.find({ $or: [{ username }, { email }] });
  return users.length === 0 ? null : users[0];
}
router.get('/', loginFuntion);
router.get('/login', loginFuntion);

router.get('/register', function (req, res, next) {
  res.render('auth/register', { title: process.env.TITLE });
});
router.post('/register', async function (req, res, next) {
  const { username, email, password, name } = req.body;
  // check if user exist
  if (await findUser({ username, email })) {
    res.json({ 'ERR': 'USER IS EXISTED!' });
    return;
  }
  // hash password
  const salt = await bcrypt.genSalt(+saltRounds);
  const hash = await bcrypt.hash(myPlainTextPwd, salt);
  // save user to database
  const user = new Users({ name, username, email, password: hash });
  await user.save();
  res.redirect('/auth');
});

module.exports = router;

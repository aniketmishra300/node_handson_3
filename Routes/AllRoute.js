const route = require('express').Router();
const { home, register, login, contact } = require('../Controller/Api');
const { SpecialAuth } = require('../middleware/Auth');




route.get('/',home)

route.get('/register',SpecialAuth,register)

route.get('/login',login)

route.get('/contact',SpecialAuth,contact)

module.exports = route
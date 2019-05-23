const route = require('express').Router(),
    user = require('../controller/user');

// PATH: /api/user/register
route.post('/register', user.register)

// PATH: /api/user/login
route.post('/login', user.login)

module.exports = route
const route = require('express').Router(),
    user = require('./user'),
    todo = require('./todo');

route.use('/user', user);
route.use('/todo', todo);

module.exports = route;
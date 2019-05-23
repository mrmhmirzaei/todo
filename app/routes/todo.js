const route = require('express').Router(),
    todo = require('../controller/todo'),
    auth = require('../middlewares/auth');

route.use(auth);

// PATH: /api/todo/add
route.post('/add', todo.newTodo);

// PATH: /api/todo/remove
route.delete('/remove', todo.removeTodo);

// PATH: /api/todo/update
route.put('/update', todo.updateTodo);

// PATH: /api/todo/get
route.get('/get', todo.getAllTodo);

// PATH: /api/todo/check
route.put('/check', todo.getChangeCheck);

module.exports = route;
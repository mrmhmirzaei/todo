const express = require('express'),
    bodyParser = require('body-parser'),
    mongd = require('mongoose'),
    env = require('./env')
    app = express();

mongd.connect(env.database, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./app/routes/api'))

app.listen(3000);
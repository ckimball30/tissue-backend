var express = require('express');
var router = require('../routes/issues');
var users = require('../routes/users');
var body_parser = require('body-parser');
var app = express();
var SERVER_PORT = 3000;

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use('/', router);
app.use('/users', users);
app.listen(3000, () => { console.log(`You're Now listening on port ${SERVER_PORT}`)});
module.exports = {app};
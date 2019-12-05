var express = require('express');
var router = require('../routes/issues');
var users = require('../routes/users');
var body_parser = require('body-parser');
var app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use('/', router);
app.use('/users', users);
app.listen(port, () => { console.log(`You're Now listening on port ${port}`)});
module.exports = {app};
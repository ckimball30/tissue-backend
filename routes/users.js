var user = require('../user_class.js');
var express = require('express');
var router = express.Router();

var users = [];

router.get('/', (req, res) => {
	if(users.length == 0) res.json({ data: 'there are no users' });
	if(users.length >= 1) res.json(users);
});
router.put('/user.json', (req, res) => {
	var name = req.body.name;
	var newuser = new user(name);
	users.push(newuser);
	res.send('ok');
});
module.exports = router;
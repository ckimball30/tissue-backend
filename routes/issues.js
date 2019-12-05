var express = require('express');
var router = express.Router();
var issue_manager = require('issue-manager');
issue_manager.connectTo();
router.route('/issues').get((req, res) => {
	var issues = issue_manager.issues();
	console.log(issues);
	res.send(issues);
});

router.route('/issues/issue.json')
	.put((req,res) => {
		console.log(req.body);
		issue_manager.createIssue(req.body.id,req.body.title, req.body.status, req.body.assignee, req.body.created, req.body.updated, req.body.details);
		res.send('ok');
	});
router.route('/issues/:issue_id.json')
	.post(function (req, res) {
		issue_manager.updateIssue(req.body.id,req.body.title, req.body.status, req.body.assignee, req.body.created, req.body.updated, req.body.details);
		console.log("Issue " + req.body.Id + " was updated");
		res.send("Issue " + req.body.Id + " was updated");
})
	.delete((req,res) => {
		console.log("Id to delete: " + req.body.id);
		issue_manager.deleteIssue(id);
		res.send("1 issue deleted");
	});
	
module.exports = router;
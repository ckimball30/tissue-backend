var MongoClient = require('../mongodb').MongoClient;
var url = 'mongodb+srv://admin:mW67KFZm6IivUWYE@ckimball-h5bku.mongodb.net/test?retryWrites=true&w=majority';
const mongoose = require('mongoose');
var db;

function issues() {
		var dbo = db.db("tissue");
		dbo.collection("issues").find().toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		return result;
		});
}


function createIssue(id, title, status, assignee, created, updated, details){
	var newIssue = new Issue(id, title, status, assignee, created, updated, details);
	var dbo = db.db("tissue");
	dbo.collection('issues').save(newIssue, (err, result) => {
		if (err) return console.log(err)
		console.log('saved to database');
		})
 }
	
//function to update an issue
https://www.w3schools.com/nodejs/nodejs_mongodb_update.asp
function updateIssue(id, title, status, assignee, created, updated, details){
	var dbo = db.db("tissue");
	dbo.collection("issues").findOneAndUpdate({ "Id": id }, { "$set": { "Title": title, "Status": status, "Assignee": assignee, "Created": created, "Updated": updated, "Details": details}
	})
	console.log("1 Issue Updated");
}
function deleteIssue(id){
	var dbo = db.db("tissue");
	dbo.collection("issues").findOneAndDelete({id: id},(err, res) =>{
  	console.log(id);
	if(err) return res.send(500, err);
		console.log("1 document deleted with id " + id);
	});
}
function connectTo() {
	MongoClient.connect(url , { useNewUrlParser: true },(err, database) => {
		if (err) return console.log(err);
		db = database;
	});
}

function Issue(Id,Title,Status,Asignee,Created,Updated,Details) {
	this.Id = Id;
	this.Title = Title;
	this.Status = Status;
	this.Asignee = Asignee;
	this.Created = Created;
	this.Updated = Updated;
	this.Details = Details;
}


module.exports = {issues, createIssue, updateIssue, deleteIssue, connectTo};

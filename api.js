var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var TeacherModel = require('./Teacherschema');
var departmentModel = require('./departmentschema');

// Connecting to database
var query = 'mongodb://127.0.0.1:27017/College'

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, { useNewUrlParser : true,
useUnifiedTopology: true }, function(error) {
	if (error) {
		console.log("Error!" + error);
	}
});

router.post('/save', function(req, res) {
var newTeacher = new TeacherModel();
newTeacher.TeacherId = req.body.TeacherId;
   newTeacher.Name = req.body.Name;
   newTeacher.Stream = req.body.Stream;
   newTeacher.Birthday = req.body.Birthday;
   
   newTeacher.save(function(err, data){
       if(err){
           console.log(error);
       }
       else{
           res.send("Data inserted");
       }
   });
});

router.get('/findall', function(req, res) {
    TeacherModel.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 });

 router.put('/update', function(req, res) {
    TeacherModel.findByIdAndUpdate(req.body.id, 
    {Name:req.body.Name}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
});

router.delete('/delete', function(req, res) {
    TeacherModel.remove({TeacherId:102}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});

module.exports = router;

router.post('/departmentsave', function(req, res) {
    var newdepartment = new departmentModel();
    newdepartment.departmentId = req.body.departmentId;
    newdepartment.Name = req.body.Name;
    newdepartment.tag = req.body.tag

    newdepartment.save(function(err, data){
        if(err){
            console.log(error);
        }
        else{
            res.send("Data inserted");
        }
    });
 });
 

 router.get('/departmentfindall', function(req, res) {
    departmentModel.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 });

router.delete('/departmentdelete', function(req, res) {
    departmentModel .remove({departmentId:102}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});


router.put('/departmentupdate', function(req, res) {
    departmentModel.findByIdAndUpdate(req.body.id, 
    {Name:req.body.Name}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
});
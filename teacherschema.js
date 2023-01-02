var mongoose=require('mongoose');

var TeacherSchema = new mongoose.Schema({
	TeacherId:Number,
	Name:String,
	Stream:String,
	Birthday:Date,
	Department:String
});

module.exports = mongoose.model(
	'teacher', TeacherSchema, 'Teachers');

var mongoose=require('mongoose');

var departmentSchema = new mongoose.Schema({
	departmentId:Number,
	Name:String,
	tag:String
});

module.exports = mongoose.model(
	'department', departmentSchema, 'departments');
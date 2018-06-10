var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
	name:String,
	title: String,
    area: String,
    fuwu: String,
    year: Number,
    month: Number,
    day: Number,
    tianshu: Number,
    type: String,
    miaoshu: String,
    tags:{
        type: String,
        index: true
    }
});


module.exports = mongoose.model('task',taskSchema);
var mongoose = require('mongoose');

var luxianSchema = new mongoose.Schema({
	name:String,
	title: String,
    money: Number,
    area: String,
    renshu:{
        type: Number,
        default: 0
    },
    jieshao: String,
    img: String,
    img1: String,
    img2: String,
    img3: String,
    img4: String
});


module.exports = mongoose.model('luxian',luxianSchema);
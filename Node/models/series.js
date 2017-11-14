var mongoose = require('mongoose'),Schema=mongoose.Schema;

// Define our user schema

var Series_Schema = new Schema({
    
    series_id: {type: String},
    series_name: {type: String, required: true},
    series_image:{type:String, required: true},
    series_description:{type:String},
    created_at: {type: Date,default : Date.now},
    updated_at:""
});

module.exports=mongoose.model('Series', Series_Schema);
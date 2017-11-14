var mongoose = require('mongoose'),Schema=mongoose.Schema;

// Define our user schema
var Episode_Schema = new Schema({
    episode_id:{type:String},
    episode_name: {type: String},
    episode_data:{type:String},
    series_id:{type:String},
    season_id: {type: String},
    episode_image: {type: String},
    created_at: {type: Date,default : Date.now},
    updated_at:""
});

module.exports=mongoose.model('Episode', Episode_Schema);
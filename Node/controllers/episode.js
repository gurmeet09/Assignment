var Episode = require('../models/episode');


exports.postEpisode = function (req, res) {
    var episode = new Episode({
        episode_name: req.body.episode_name,
        episode_data: req.body.episode_data,
        episode_id: 1,
        series_id: 1,
        season_id: req.body.season_id,
        episode_image: req.body.episode_image,
        created_date: new Date(),
        updated_date: new Date(),
});


episode.save(function (err, response) {
    console.log("hello");
    if(err) {
    return res.json(err);
    }
    else
    res.json({"status": true, body: response})
    })


}

exports.getEpisode=function(req,res){
    Episode.find({}, function(err, response){
        if(err) {
            return res.json(err);
        }

        res.json(response);
    })
}
exports.deleteEpisode=function(req,res) {
    var episodeData =req.params.episode_id;
    Episode.findOne({ _id: episodeData },function(err,episode) {
    if(err) {
    res.json(err);
    }
    
   
    if(episode) {
        Episode.remove({ _id: episodeData },function(err) {
        if(err) {
            res.json(err);
            }

            res.json({
            "status": true,
            "respData": {
            "data": "success"
            }
            });
            })
            } else {
            res.json({
            "status": false,
            "respData": {
            "data": "User Does not Exist"
            }
            })
    }
})
}

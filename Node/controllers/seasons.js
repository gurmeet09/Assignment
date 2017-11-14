var Season = require('../models/seasons');
var Episode = require('../models/episode');

exports.postSeason = function (req, res) {
    var season = new Season({
        season_name: req.body.season_name,
        season_data: req.body.season_data,
        series_id: req.body.series_id,
        season_id: 1,
        season_image: req.body.season_image,
        starts_on: req.body.starts_on,
        ends_on: req.body.ends_on,
        created_date: new Date(),
        updated_date: new Date(),
});


season.save(function (err, response) {
    console.log("hello");
    if (err) {
        return res.json(err)
      }
  
      
        res.json({
            success: true,
            body: response
            })
    console.log("response",response);  

    })


}

exports.getSeason=function(req,res){
    Season.find({}, function(err, response){
        if(err) {
            return res.json(err);
        }

        res.json(response);
    })
}
exports.deleteSeason=function(req,res) {
    var seriesdata =req.params.season_id;
    Episode.find({ season_id: seriesdata },function(err,episode) {
    if(err) {
    res.json(err);
    }
    if(episode) {
        episode.map((currElement, index) => {
            Episode.remove({ _id: currElement._id },function(err) {
                    if(err) {
                        res.json(err);
                        } })
          });
          
            Season.remove({ _id: seriesdata },function(err) {
                if(err) {
                    res.json(err);
                    } 
                    else{
                        res.json({
                            "status": true,
                            "respData": {
                            "data": "success"
                            }
                            });
                    }
                    
                })
         
                 
                }
})
}

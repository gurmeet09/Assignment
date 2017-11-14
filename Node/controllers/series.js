var Series =  require('../models/series');
var Season = require('../models/seasons');
var Episode = require('../models/episode');
exports.postSeries = function (req, res) {
    console.log("post")
    var series = new Series({
        series_name: req.body.series_name,
        series_description: req.body.series_description,
        series_id: 1,
        series_image:req.body.series_image,
        created_date: new Date(),
        updated_date: new Date(),
});

series.save(function (err, response) {
    console.log("hello");
    if(err) {
    return res.json(err);
    }

    else
    res.json({"status": true, body: response})
    })


}
exports.searchSeries = function (req, res) {
    console.log(req.body)
  
    var regex = RegExp(req.body.seriesname);
    console.log(regex)
    Series.find({
      series_name: regex
    },
    function (err, series) {
        console.log(series)
        if (err) {
          res.json(err);
        }
        if (series) {
          res.json({
            "status": true,
            "respData": {
              "data": series
            }
          });
        }
        else {
          res.json({
            "status": false,
            "respData": {
              "data": "series data does not exist"
            }
          });
        }
      });
}

exports.getSeries=function(req,res) {
    Series.find({},function(err,response) {
    if(err) {
    return res.json(req,res,err);
    }
    res.json(response);
    })
    }
    exports.deleteSeries=function(req,res) {
        var seriesdata =req.params.series_id;
        Season.find({ series_id: seriesdata },function(err,season) {
        if(err) {
        res.json(err);
        }
        if(season) {
            season.map((currElement, index) => {
                Episode.remove({ season_id: currElement._id },function(err) {
                        if(err) {
                            res.json(err);
                            } })
              });
              
                Season.remove({ series_id: seriesdata },function(err) {
                    if(err) {
                        res.json(err);
                        } 
                        
                    })
                Series.remove({ _id: seriesdata },function(err) {
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

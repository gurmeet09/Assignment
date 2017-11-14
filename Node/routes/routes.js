//import the required modules
var express = require('express');
var router = express.Router();

var seriesController = require('../controllers/series');
var seasonController = require('../controllers/seasons');
var episodeController = require('../controllers/episode');
var userController = require('../controllers/user');

router.route('/v1/search')
.post(seriesController.searchSeries)
router.route('/v1/series')
.post(seriesController.postSeries)
router.route('/v1/getSeries')
.get(seriesController.getSeries)
router.route('/v1/deleteSeries/:series_id')
.get(seriesController.deleteSeries)

router.route('/v1/seasons')
.post(seasonController.postSeason)
.get(seasonController.getSeason)
router.route('/v1/deleteSeason/:season_id')
.get(seasonController.deleteSeason)
router.route('/v1/episodes')
.post(episodeController.postEpisode)
.get(episodeController.getEpisode)
router.route('/v1/deleteEpisode/:episode_id')
.delete(episodeController.deleteEpisode)

router.route('/v1/user')
.post(userController.postUser)
.get(userController.getAllUsers)

router.route('/v1/userlogin')
.post(userController.usercheck)
.get(userController.usercheck)


module.exports = router;
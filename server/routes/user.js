const express = require('express');
const { getMovies } = require('../controllers/user');

const router = express.Router();
// User Routen

router.get('/movies', getMovies);
router.get('/actors', getActors); // Beispielroute
router.get('/movies', getMovies);
router.get('/movies/:id/actors', getMovieActors);
router.post('/actors', postActor);
router.delete('/actors/:id', deleteActor);

module.exports = router;

const express = require('express');
const router = express.Router();

// routing to index of movies and shows
router.get('/', (req, res) => {
    res.render('/media/index.ejs');
});

// routing to TV shows only
router.get('/tv', (req, res) => {
    res.render('/media/tv/index.ejs')
});

// routing to specific tv show from the tv show index
router.get('/tv/:id', (req, res) => {
    res.render('/media/tv/show.ejs')
});

// routing to movies only
router.get('/movies', (req, res) => {
    res.render('/media/movies/index.ejs')
});

// routing to specific movie from the movie index
router.get('/movies/:id', (req, res) => {
    res.render('/media/movies/show.ejs')
});

// routing to show page for specific movie or TV from the general home page
router.get('/:id', (req, res) => {
    res.render('/media/show.ejs');
});

module.exports = router;
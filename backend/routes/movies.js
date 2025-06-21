const express = require('express');
const router = express.Router();
const Movie = require('.../models/Movie');


// Get all movies
router.get('/', async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
});


// Add a movie
router.post('/', async (req, res)=> {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).json(newMovie);
});


module.exports = router;
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title : String,
    description : String,
    image : String
});

module.exports = mongoose.model('Movie', MovieSchema);
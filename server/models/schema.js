const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: String,
    contact: String,
    residenceArea: String,
    roomType: String,
    expectedRent: String,
    description: String,
    image: String,
});

const post = mongoose.model('post', postSchema);
module.exports = post;
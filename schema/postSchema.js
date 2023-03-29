const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postname: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    }
})


const Post = mongoose.model('require', postSchema)

module.exports = {Post}
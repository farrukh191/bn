const mongoose = require('mongoose');

const menschema = new mongoose.Schema({
    ranking: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    dob: {
        type: Date,
        trim: true,
        required: true
    },
    country: {
        type: String,
        trim: true,
        required: true
    },
    score: {
        type: Number,
        trim: true,
        required: true
    },
    event: {
        type: String,
        default: '100m'
    },
})

const MenRanking = new mongoose.model("MenRanking", menschema)

module.exports = MenRanking;
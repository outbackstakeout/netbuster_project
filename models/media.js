const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema(
    {
        name: String,
        img: String,
        description: String
    },
    {
        timestamps: true
    }
)

const MediaSchema = mongoose.model('MediaSchema', mediaSchema);

module.exports = MediaSchema;
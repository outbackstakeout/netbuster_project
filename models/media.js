const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema(
    {
        name: String,
        img: String,
        description: String,
        movieOrShow: String,
        trailer: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;
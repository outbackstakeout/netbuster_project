const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please create a username."],
            unique: true
        },
        email: {
            type: String,
            required: [true, "Please enter your e-mail address"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please create a password."]
        },
        myMovies: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Media'
            }
        ],
        myShows: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Media'
            }
        ]
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;
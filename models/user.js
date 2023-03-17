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
                name: String,
                img: String,
                description: String,
                movieOrShow: String,
                trailer: {
                    type: String,
                    required: false
                }
            }
        ],
        myShows: [
            {
                name: String,
                img: String,
                description: String,
                movieOrShow: String,
                trailer: {
                    type: String,
                    required: false
                }
            }
        ]
    },
    {
        timestamps: true
    }
)

const UserSchema = mongoose.model('UserSchema', userSchema);

module.exports = UserSchema;
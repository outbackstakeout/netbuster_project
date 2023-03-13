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
        }
    },
    {
        timestamps: true
    }
)

const UserSchema = mongoose.model('UserSchema', userSchema);

module.exports = UserSchema;
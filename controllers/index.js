const express = require('express');
const router = express.Router();

module.exports = {
    media: require('./media'),
    user: require('./user')
};
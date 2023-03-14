const express = require('express');
const router = express.Router();

const { UserSchema } = require('../models');

router.get('/', (req, res) => {
    res.render('/user/index.ejs');
});

router.post('/new_account', async (req, res, next) => {
    try {

    } catch (err) {
        console.log(err);
        return next();
    }
})

router.get('/:id', (req, res) => {
    res.render('/user/show.ejs');
});

module.exports = router;
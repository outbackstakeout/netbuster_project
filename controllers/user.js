const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('/user/index.ejs');
});

router.get('/:id', (req, res) => {
    res.render('/user/show.ejs');
});

module.exports = router;
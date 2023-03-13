const express = require('express');
const app = express();

app.set('views engine', 'ejs');

app.get('/', (req, res) => {
    res.render('landing');
});



app.get('/*', (req, res) => {
    res.render('404');
});

app.listen(4000, () => {
    console.log('I am listening on port 4000')
});
// setting up express
const express = require('express');
const app = express();

// linking controllers to be used
const mediaController = require('./controllers/media');
const userController = require('./controllers/user')

// views directory link
app.set('views engine', 'ejs');

// landing page route
app.get('/', (req, res) => {
    res.render('landing');
});

// signup page route
app.get('/signup', (req, res) => {
    res.render('signup');
});

// signin page route
app.get('/signin', (req, res) => {
    res.render('signin');
});

// linking routes for controllers
app.use('/home', mediaController);
app.use('/user', userController);

// 404 catch all
app.get('/*', (req, res) => {
    res.render('404');
});

// listening on port 4000
app.listen(4000, () => {
    console.log('I am listening on port 4000')
});
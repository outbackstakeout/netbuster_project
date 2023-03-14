// setting up express
const express = require('express');
const app = express();

// linking controllers to be used, both controllers conflated since we have an index.js file exporting both through the controllers directory
const { media, user } = require('./controllers');
// const userController = require('./controllers/user')

// views directory link
app.set('view engine', 'ejs');

app.use(express.static('public'));

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
app.use('/home', media);
app.use('/user', user);

// 404 catch all
app.get('/*', (req, res) => {
    res.render('404');
});

// listening on port 4000
app.listen(4000, function () {
    console.log('I am listening on port 4000')
});
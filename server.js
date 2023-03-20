// setting up express
const express = require('express');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config();
const methodOverride = require('method-override');


// linking controllers to be used, both controllers conflated since we have an index.js file exporting both through the controllers directory
const { media, user } = require('./controllers');
// const userController = require('./controllers/user')

// views directory link
app.set('view engine', 'ejs');

app.use(session({
    store: MongoStore.create(
        {
            mongoUrl: process.env.MONGO_DB_URI
        }
    ),
    secret: '12345',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

// landing page route
app.get('/', (req, res) => {
    console.log(req.session);
    res.render('landing');
});

// // signup page route
// app.get('/signup', (req, res) => {
//     res.render('signup');
// });

// // signin page route
// app.get('/signin', (req, res) => {
//     res.render('signin');
// });

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
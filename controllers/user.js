const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User, Media } = require('../models');

// might want to make this redirect instead
router.get('/', async (req, res, next) => {
    let myMedia;
    try {
        // this will comb through the database to find our media
        myMedia = await Media.find({});
        // console.log(myMedia);
        // this context will pass Media as an array
        res.render('media/index.ejs', { media: myMedia });
    } catch (err) {
        console.log(err);
        return next();
    }
});

router.get('/signinpage', (req, res) => {
    res.render('user/signin.ejs')
})

router.get('/signuppage', (req, res) => {
    res.render('user/signup.ejs')
})

router.get('/settings', async (req, res, next) => {
    try {
        const findUser = await User.findById(req.session.currentUser._id)
        res.render('user/editAndDelete.ejs', { user: findUser });
    } catch (err) {
        console.log(err);
        return next();
    }
    console.log(req.session.currentUser);
})

// show route for a user to check out their liked movies and shows
router.get('/mystuff', async (req, res, next) => {
    try {
        let user;
        user = await User.findById(req.session.currentUser._id).populate("myMovies myShows").exec();
        // console.log(findUser);
        res.render('user/mystuff.ejs', { user: user });
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.post('/signin', async (req, res, next) => {
    try {
        const loginInfo = req.body;
        const foundUser = await User.findOne({ username: loginInfo.username });
        if (!foundUser) return res.redirect('/signup');
        const match = await bcrypt.compare(loginInfo.password, foundUser.password);
        console.log(match);
        if (!match) return res.send("Incorrect email or password");
        if (foundUser && match) {
            delete foundUser.password;
            req.session.currentUser = foundUser;
        }
        return res.redirect('/home');
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.post('/signup', async (req, res, next) => {
    try {
        // sets user info to the req.body passed in from the form
        const userInfo = req.body
        const foundUser = await User.exists({ email: userInfo.email })
        console.log(foundUser)
        if (foundUser) {
            return res.redirect('/signin')
        }
        let salt = await bcrypt.genSalt(12);
        console.log(`My salt is ${salt}`);
        const hash = await bcrypt.hash(userInfo.password, salt);
        console.log(`My hash is ${hash}`);
        userInfo.password = hash;
        const newUser = await User.create(userInfo);
        delete newUser.password;
        console.log(newUser);
        req.session.currentUser = newUser;
        return res.redirect('/home');
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.get('/delete', async (req, res, next) => {
    try {
        console.log("I'm hitting the delete route! (controllers/user.js)");
        const userGettingDeleted = await User.findByIdAndDelete(req.session.currentUser._id);
        console.log(userGettingDeleted);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.put('/update/:id', async (req, res, next) => {
    try {
        console.log(req.params.id);
        console.log(req.body);
        console.log("Im hitting the post/put route")
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
        console.log(updatedUser);
        res.redirect('/home');
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
});
// router.get('/:id', (req, res) => {
//     res.render('/user/show.ejs');
// });

module.exports = router;
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { UserSchema } = require('../models');

router.get('/', (req, res) => {
    res.render('/media/index.ejs');
});

router.get('/signinpage', (req, res) => {
    res.render('user/signin.ejs')
})

router.get('/signuppage', (req, res) => {
    res.render('user/signup.ejs')
})

router.get('/profile', (req, res) => {
    res.render('user/show.ejs');
})

router.post('/signin', async (req, res, next) => {
    try {
        const loginInfo = req.body;
        const foundUser = await UserSchema.findOne({ username: loginInfo.username });
        if (!foundUser) return res.redirect('/signup');
        const match = await bcrypt.compare(loginInfo.password, foundUser.password);
        console.log(match);
        if (!match) return res.send("Incorrect email or password");
        // req.session.currentUser = {
        //     id: foundUser._id,
        //     username: foundUser.username
        // };
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
        const foundUser = await UserSchema.exists({ email: userInfo.email })
        console.log(foundUser)
        if (foundUser) {
            return res.redirect('/signin')
        }
        let salt = await bcrypt.genSalt(12);
        console.log(`My salt is ${salt}`);
        const hash = await bcrypt.hash(userInfo.password, salt);
        console.log(`My hash is ${hash}`);
        userInfo.password = hash;
        const newUser = await UserSchema.create(userInfo);
        console.log(newUser);
        return res.redirect('/home');
    } catch (err) {
        console.log(err);
        return next();
    }
})

// router.get('/:id', (req, res) => {
//     res.render('/user/show.ejs');
// });

module.exports = router;
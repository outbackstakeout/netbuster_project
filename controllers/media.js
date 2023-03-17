const express = require('express');
const router = express.Router();

const { MediaSchema, UserSchema } = require('../models');

let movieSeedData = [
    {
        name: "21 Jump Street",
        img: "https://i.imgur.com/UJWuB1t.jpeg",
        description: "A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.",
        movieOrShow: "movie",
        trailer: "https://www.youtube.com/embed/Oj55KinxZx4"
    },
    {
        name: "The Dark Knight",
        img: "https://i.imgur.com/jjGq99Q.jpeg",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        movieOrShow: "movie",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
        name: "Click",
        img: "https://i.imgur.com/0NFnJbK.jpeg",
        description: "A workaholic architect finds a universal remote that allows him to fast- forward and rewind to different parts of his life.",
        movieOrShow: "movie",
        trailer: "https://www.youtube.com/embed/zZNC5emNyEQ"
    },
    {
        name: "Dodgeball",
        img: "https://i.imgur.com/no2qEd1.jpeg",
        description: "A group of misfits enter a Las Vegas dodgeball tournament in order to save their cherished local gym from the onslaught of a corporate health fitness chain.",
        movieOrShow: "movie",
        trailer: "https://www.youtube.com/embed/W-XbDZUnUmw"
    },
    {
        name: "F9",
        img: "https://i.imgur.com/s93RjMB.jpeg",
        description: "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother.",
        movieOrShow: "movie",
        trailer: "https://www.youtube.com/embed/aSiDu3Ywi8E"
    },
    {
        name: "John Wick",
        img: "https://i.imgur.com/P2bdAZM.jpeg",
        description: "An ex - hit - man comes out of retirement to track down the gangsters that killed his dog and took his car.",
        movieOrShow: "movie",
        trailer: "https://www.youtube.com/embed/C0BMx-qxsP4"
    },
    {
        name: "The Mask",
        img: "https://i.imgur.com/HK91Wzi.jpeg",
        description: "Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious mask.",
        movieOrShow: "movie",
        trailer: "https://www.youtube.com/embed/LZl69yk5lEY"
    },
    {
        name: "Ocean's Eleven",
        img: "https://i.imgur.com/aPTKiNr.jpeg",
        description: "Danny Ocean and his ten accomplices plan to rob three Las Vegas casinos simultaneously.",
        movieOrShow: "movie",
        trailer: "https://www.youtube.com/embed/imm6OR605UI"
    },
    {
        name: "Spiderman No Way Home",
        img: "https://i.imgur.com/vIBodzT.jpeg",
        description: "With Spider - Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
        movieOrShow: "movie",
        trailer: "https://www.youtube.com/embed/rt-2cxAiPJk"
    },
    {
        name: "The Wolf of Wall Street",
        img: "https://i.imgur.com/DB3otyI.jpeg",
        description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock - broker living the high life to his fall involving crime, corruption and the federal government.",
        movieOrShow: "movie",
        trailer: "https://www.youtube.com/embed/iszwuX1AK6A"
    }
]

let televisionSeedData = [
    {
        name: "The 100",
        img: "https://i.imgur.com/rqp7tMa.jpeg",
        description: "Set 97 years after a nuclear war destroyed civilization, when a spaceship housing humanity's lone survivors sends 100 juvenile delinquents back to Earth, hoping to repopulate the planet.",
        movieOrShow: "show"
    },
    {
        name: "Breaking Bad",
        img: "https://i.imgur.com/XqBcvgM.jpeg",
        description: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
        movieOrShow: "show"
    },
    {
        name: "Dragon Ball Z",
        img: "https://i.imgur.com/llUu48a.jpeg",
        description: "With the help of the powerful Dragonballs, a team of fighters led by the saiyan warrior Goku defend the planet earth from extraterrestrial enemies.",
        movieOrShow: "show"
    },
    {
        name: "The Flash",
        img: "https://i.imgur.com/ChUj8xm.jpeg",
        description: "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, and fighting crime in Central City.",
        movieOrShow: "show"
    },
    {
        name: "The Last of Us",
        img: "https://i.imgur.com/NHqI9Rw.jpeg",
        description: "In a hostile, post- pandemic world, Joel and Ellie, brought together by desperate circumstances, must rely on each other to survive a brutal journey across what remains of the United States.",
        movieOrShow: "show"
    },
    {
        name: "The Mandalorian",
        img: "https://imgpile.com/images/hUHM6R.jpg",
        description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
        movieOrShow: "show"
    },
    {
        name: "Power",
        img: "https://imgpile.com/images/hUHcIW.jpg",
        description: "James 'Ghost' St. Patrick, a wealthy New York nightclub owner who has it all, catering to the city's elite and dreaming big, lives a double life as a drug kingpin.",
        movieOrShow: "show"
    }
]

// route to delete old seed data
router.get('/deleteseed', async (req, res, next) => {
    try {
        // deletes whatever data was in the media schema
        const deletedOldOnes = await MediaSchema.deleteMany({});
        console.log(deletedOldOnes);
        // redirects to the home page (index of media)
        res.redirect('/home/seedmovies');
    } catch (err) {
        console.log(err);
        return next();
    }
});

// seed route to get movie data into Mongo
router.get('/seedmovies', async (req, res, next) => {
    try {
        // inserts all of our seed data through the MediaSchema
        const addMovies = await MediaSchema.insertMany(movieSeedData);
        // console.log(addMovies);
        // redirects to the home page (index of media)
        res.redirect('/home/seedtv');
    } catch (err) {
        console.log(err);
        return next();
    }
});

// seed route to get tv data into mongo
router.get('/seedtv', async (req, res, next) => {
    try {
        // inserts all of our seed data through the MediaSchema
        const addTelevision = await MediaSchema.insertMany(televisionSeedData);
        // console.log(addTelevision);
        // redirects to the home page (index of media)
        res.redirect('/home');
    } catch (err) {
        console.log(err);
        return next();
    }
});


// routing to index of movies and shows
router.get('/', async (req, res, next) => {
    let myMedia;
    let user;
    try {
        // this will comb through the database to find our media
        myMedia = await MediaSchema.find({});
        // console.log(myMedia);
        findUser = await UserSchema.findById(req.session.currentUser._id)
        // console.log(req.session);
        // this context will pass Media as an array
        res.render('media/index.ejs', { media: myMedia, user: findUser });
    } catch (err) {
        console.log(err);
        return next();
    }
});


// routing to TV shows only
router.get('/tv', (req, res) => {
    res.render('media/tv/index.ejs')
});

// 🌈routing to specific tv show from the tv show index
// router.get('/tv/:id', async (req, res, next) => {
//     try {

//     } catch (err) {
//         console.log(err);
//         return next();
//     }
//     res.render('media/show.ejs')
// });

// routing to movies only
router.get('/movies', (req, res) => {
    res.render('media/movies/index.ejs')
});

// 🌈routing to specific movie from the movie index
router.get('/movies/:id', async (req, res, next) => {
    let myMedia;
    let findUser;
    try {
        myMedia = await MediaSchema.findOne({ _id: req.params.id });
        findUser = await UserSchema.findOne({ _id: req.session.currentUser._id })
        console.log(myMedia);
        console.log(findUser);
        res.render('media/show.ejs', { user: findUser, media: myMedia });
    } catch (err) {
        console.log(err);
        return next();
    }
});

router.put('/like/movie/:id', async (req, res, next) => {
    try {
        const likedMedia = await MediaSchema.findById(req.params.id);
        console.log(likedMedia);
        req.session.currentUser.myMovies.push(likedMedia.name)
        console.log(req.session.currentUser.myMovies);
        res.redirect('/home');
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.put('/like/tv/:id', async (req, res, next) => {
    try {
        const likedMedia = await MediaSchema.findById(req.params.id);
        console.log(likedMedia);
        req.session.currentUser.myShows.push(likedMedia.name)
        console.log(req.session.currentUser.myMovies);
        res.redirect('/home');
    } catch (err) {
        console.log(err);
        return next();
    }
})

// routing to show page for specific movie or TV from the general home page
router.get('/:id', (req, res) => {
    res.render('media/show.ejs');
});

module.exports = router;
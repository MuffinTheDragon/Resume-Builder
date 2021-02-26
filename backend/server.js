"use strict";

// read the environment variable (will be 'production' in production mode)

const env = process.env.NODE_ENV

const express = require("express");
// starting the express server
const app = express();
const port = process.env.PORT || 5000;
const path = require('path')

const passport = require('passport');
const bodyParser = require("body-parser");
const cors = require('cors')

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set('useFindAndModify', false);

// User Schema
const { User } = require("./models/user");


const { Template, Experience, Project } = require("./models/resumeTemplate")



// enable CORS if in development, for React local development server to connect to the web server.
// if (env !== 'production') { app.use(cors()) }




// body-parser: middleware for parsing HTTP JSON body into a usable object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Express Session for managing user sessions
const session = require("express-session");

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));





// function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
//     return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
// }


// // middleware for mongo connection error for routes that need it
const mongoChecker = (req, res, next) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        // log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    } else {
        next()
    }
}



// // Firebase Setup 

// const admin = require("firebase-admin");
// const serviceAccount = require("./serviceAccountKey.json");
// const { EDESTADDRREQ } = require("constants");


// POST 
app.post('/Template/create', async (req, res) => {
    // Add code here
    // check mongoose connection established.

    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    let template = await makeTemplate(req)

    try {
        const final = await template.save()
        res.status(200).send(final);

    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    }
})




/* Following part handles authentication 

=============== Backend for Authentication Starts =====================

*/

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "698522005806-v4bt4q4fje7omd7qs6pj9n6v721bh6gt.apps.googleusercontent.com",
    clientSecret: "PlQYJxHy2oR-wOdt8ENI1vbJ",
    callbackURL: "http://localhost:5000/google/callback"
  },
  function(token, tokenSecret, profile, done) {
      User.findOrCreate(profile.id, profile.emails[0].value,  profile.displayName).then((user) => {
        console.log(user);
      return done(null, user);
    })
  }
));


// Auth Routes

// Login to google route
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback after Logging in
app.get('/google/callback', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    // console.log("Reached here")
    // res.send('It works!');
  }
);

app.get('/login', (req, res)=> {
  res.redirect('/google');
})

// Logging out of the session
app.get('/logout', (req, res) => {
  req.logout();
  res.send("User successfully logged out!")
  // res.redirect('/');
})

// Middleware to protect and authenticate routes
const verifyAuthenication = (req, res, next) => {
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/google')
}

/*
=============== Backend for Authentication Ends =====================
*/

// For testing, replace with actual homepage later.
app.get('/', verifyAuthenication, (req, res) => {
  res.send("Currently Logged In User: " + req.user.displayName)
})

/*
=============== Routes =====================
*/

// creates the template model and populates it with the request body data
async function makeTemplate(req) {

    const final = createSubSchema(req).then(result => {

        const template = new Template({
            userid: req.body.userid,
            personal: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                personal_website: req.body.personal_website
            },
            location: {
                city: req.body.lcity,
                countryCode: req.body.countryCode,
                region: req.body.region
            },
            profile: {
                platform: req.body.platform,
                username: req.body.username,
                url: req.body.url
            },
            education: {
                city: req.body.ecity,
                degree: req.body.degree,
                gpa: req.body.gpa,
                graduation_date: req.body.graduation_date,
                school: req.body.school,
                start_date: req.body.start_date
            },
            courses: req.body.courses,
            experiences: result[0],
            projects: result[1],
            skills: req.body.skills,
            hobbies: req.body.hobbies,
        })
        return template
    }).catch((error) => {
        console.error(error);
    })

    return final
}


// creates the experience and project model and populates it with the request body data
async function createSubSchema(req) {

    let experience_num = 0
    let project_num = 0

    if (req.body.experiences) {
        experience_num = req.body.experiences.length
    }

    if (req.body.projects) {
        project_num = req.body.projects.length
    }

    for(let i=0; i<experience_num; i++) {
        let experience = new Experience({
            date: req.body.experiences[i].date,
            description: req.body.experiences[i].description,
            company_name: req.body.experiences[i].company_name,
            position: req.body.experiences[i].position
        })
        experience_array.push(experience)
    }

    for(let j=0; j<project_num; j++) {
        let project = new Project({
            project_name: req.body.projects[j].project_name,
            description: req.body.projects[j].description,
            start_date: req.body.projects[j].start_date,
            end_date: req.body.projects[j].end_date
        })
        project_array.push(project)
    }

    return [experience_array, project_array]
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
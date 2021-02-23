"use strict";

// read the environment variable (will be 'production' in production mode)

const env = process.env.NODE_ENV

const express = require("express");
// starting the express server
const app = express();
const port = process.env.PORT || 5000;
const path = require('path')

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set('useFindAndModify', false);


// to validate object IDs

/* Only for reference */
// const { ObjectID } = require("mongodb");
// const { User } = require("./models/user");
// const { Admin } = require("./models/admin")




// enable CORS if in development, for React local development server to connect to the web server.
const cors = require('cors')
if (env !== 'production') { app.use(cors()) }




// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// express-session for managing user sessions
const session = require("express-session");
const MongoStore = require('connect-mongo')(session) // to store session information on the database in production
const { mongo } = require("mongoose");





function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
    return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}


// middleware for mongo connection error for routes that need it
const mongoChecker = (req, res, next) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    } else {
        next()  
    }   
}

// Firebase Setup 

const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

// Use the GoogleStrategy within Passport.

passport.use(new GoogleStrategy({
    consumerKey: 698522005806-v4bt4q4fje7omd7qs6pj9n6v721bh6gt.apps.googleusercontent.com,
    consumerSecret: PlQYJxHy2oR-wOdt8ENI1vbJ,
    callbackURL: "http://localhost:5000/google/callback"
  },
  function(token, tokenSecret, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
  }
));



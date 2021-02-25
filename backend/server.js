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
const { Template } = require("./models/resumeTemplate")


// enable CORS if in development, for React local development server to connect to the web server.
const cors = require('cors')
if (env !== 'production') { app.use(cors()) }




// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// express-session for managing user sessions
const session = require("express-session");
// const MongoStore = require('connect-mongo')(session) // to store session information on the database in production
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

// // Firebase Setup 

// const admin = require("firebase-admin");
// const serviceAccount = require("./serviceAccountKey.json");
// const { EDESTADDRREQ } = require("constants");

// GET the templates 
app.get('/restaurants', async (req, res) => {
    // Add code here

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    try {
        const restaurants = await Restaurant.find()
        if (!restaurants) {
            res.status(404).send()
        }
        else {
            res.send(restaurants)
        }
    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    }

})


// POST 
app.post('/create', async (req, res) => {
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


// UPDATE 






// Listening for api calls
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


// creates the template model and populates it with the request body data
async function makeTemplate(req) {

    let template;

    template = new Experience({
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
        // experiences: req.body.experiences, // [{date: "", description: "", company_name: ""}, {date: "", description: "", company_name: ""}, {date: "", description: "", company_name: ""}]
        skills: req.body.skills,
        hobbies: req.body.hobbies,
    })

    return template;
}


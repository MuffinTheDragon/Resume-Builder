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
const { ObjectID } = require('mongodb')

const { Template, Experience, Project, Achievement, Clubs, Hackathons } = require("./models/resumeTemplate")



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



/* Following part handles authentication 

=============== Backend for Authentication Starts =====================

*/

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "698522005806-v4bt4q4fje7omd7qs6pj9n6v721bh6gt.apps.googleusercontent.com",
    clientSecret: "PlQYJxHy2oR-wOdt8ENI1vbJ",
    callbackURL: "http://localhost:5000/google/callback"
},
    function (token, tokenSecret, profile, done) {
        User.findOrCreate(profile.id, profile.emails[0].value, profile.displayName).then((user) => {
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

app.get('/login', (req, res) => {
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
    if (req.isAuthenticated()) {
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
=============== API Requests =====================
*/


// POST 
app.post('/Template', async (req, res) => {

    if (!req.user) {
        res.status(401).send()
        return;
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    let template = await makeTemplate(req)

    try {
        console.log("before");
        const final = await template.save()
        console.log("after");
        res.status(200).send(final);

    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    }
})

// GET all the templates for the user 
app.get('/Template/getAll/:user_id', async (req, res) => {

    const user_id = req.params.user_id;

    if (!req.user) {
        res.status(401).send()
        return;
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    if (!ObjectID(user_id)) {
        res.status(404).send()
        return;
    }

    try {
        const template = await Template.find({ userid: req.user }); 
        
        if (!template) {
            res.status(404).send()
        } 

        res.status(200).send(template); 
    } catch (error) {
        console.log(error); 
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    }

})

// GET the templates 
app.get('/Template/:template_id', async (req, res) => {

    const _id = req.params.template_id;

    if (!req.user) {
        res.status(401).send()
        return;
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    if (!ObjectID(_id)) {
        res.status(404).send()
        return;
    }

    try {
        const template = await Template.findById(_id)
        if (!template) {
            res.status(404).send()
        } else if(template.userid.id == req.user.id) {
            res.send(template)
        } else {
            console.log("there");
            res.status(401).send()
        }
    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    }

})


// UPDATE 
app.put("/Template/:template_id", async (req, res) => {

    const _template_id = req.params.template_id;

    if (!req.user) {
        res.status(401).send()
        return;
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    if (!ObjectID(_template_id)) {
        res.status(401).send()
        return;
    }

    const template = await Template.findOne({ _id: _template_id, userid: req.user })
    if (!template) {
        res.status(401).send()
        return;
    }

    let updated = await updateTemplate(req, template);

    try {
        const final = await updated.save()
        res.status(200).send("Updated")

    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    }
})


// DELETE 
app.delete('/Template/:template_id', async (req, res) => {
	const _template_id = req.params.template_id

    if (!req.user) {
        res.status(401).send()
        return;
    }

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}

    if (!ObjectID(_template_id)) {
		res.status(404).send()
		return;
	}

    const template = await Template.findOne({ _id: _template_id, userid: req.user })
    if (!template) {
        res.status(401).send()
        return;
    }

	try {
        Template.deleteOne({"_id": ObjectID(_template_id)}).then((result) =>{
            if (result.deletedCount === 0) {
                res.status(404).send(); 
                return; 
            }
            res.status(200).send(); 

        }).catch((error) => { 
            res.status(400).send(error); 
        })
        
	} catch (error) {
		if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
		}
	}

})


/*
=============== Helper Functions =====================
*/

function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
	return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}


// creates the template model and populates it with the request body data
async function makeTemplate(req) {

    const final = createSubSchema(req).then(result => {

        const template = new Template({
            userid: req.user,
            Personal: {
                fname: req.body.Personal.fname,
                lname: req.body.Personal.lname,
                email: req.body.Personal.email,
                telephone: req.body.Personal.telephone,
                website: req.body.Personal.website,
                github: req.body.Personal.github
            },
            Experiences: result[0],
            Projects: result[1],
            Achievements: result[2],
            EducationHistory: {
                school: req.body.EducationHistory.school,
                degree: req.body.EducationHistory.degree,
                startDate: req.body.EducationHistory.startDate,
                endDate: req.body.EducationHistory.endDate,
                gpa: req.body.EducationHistory.gpa,
            },
            Skills: req.body.Skills,
            coursework: req.body.CourseWork,
            clubs: result[3],
            hobbies: req.body.Hobbies,
            hackathons: result[4]
        })
        return template
    }).catch((error) => {
        console.error(error);
    })

    return final
}

async function updateTemplate(req, template) {

    const final = createSubSchema(req).then(result => {

        template.Personal.fname=req.body.Personal.fname;
        template.Personal.lname=req.body.Personal.lname;
        template.Personal.email=req.body.Personal.email;
        template.Personal.telephone=req.body.Personal.telephone;
        template.Personal.website=req.body.Personal.website;
        template.Personal.github=req.body.Personal.github;
        template.Experience=result[0];
        template.Projects=result[1];
        template.Achievement=result[2];
        template.EducationHistory.school=req.body.EducationHistory.school;
        template.EducationHistory.degree=req.body.EducationHistory.degree;
        template.EducationHistory.startDate=req.body.EducationHistory.startDate;
        template.EducationHistory.endDate=req.body.EducationHistory.endDate;
        template.EducationHistory.gpa=req.body.EducationHistory.gpa;
        template.Skills=req.body.Skills;
        template.CourseWork=req.body.CourseWork;
        template.Clubs=result[3];
        template.Hobbies=req.body.Hobbies;
        template.Hackathons=result[4];

        return template
    }).catch((error) => {
        console.error(error);
    })

    return final
}


// creates the sub schema model and populates it with the request body data
async function createSubSchema(req) {

    let experience_num = 0
    let project_num = 0
    let achievement_num = 0
    let clubs_num = 0
    let hackathons_num = 0

    if (req.body.Experiences) {
        experience_num = req.body.Experiences.length
    }

    if (req.body.Projects) {
        project_num = req.body.Projects.length
    }
    
    if (req.body.Achievement) {
        achievement_num = req.body.Achievement.length
    }

    if (req.body.Clubs) {
        clubs_num = req.body.Clubs.length
    }

    if (req.body.Hackathons) {
        hackathons_num = req.body.Hackathons.length
    }

    let experience_array = []
    let project_array = []
    let achievement_array = []
    let clubs_array = []
    let hackathons_array = []

    for (let i = 0; i < experience_num; i++) {
        let experience = new Experience({
            id: req.body.Experience[i].id,
            title: req.body.Experiences[i].title,
            subtitle: req.body.Experiences[i].subtitle,
            startDate: req.body.Experiences[i].startDate,
            endDate: req.body.Experiences[i].endDate,
            location: req.body.Experiences[i].location,
            desc: req.body.Experiences[i].desc,
        })
        experience_array.push(experience)
    }

    for (let j = 0; j < project_num; j++) {
        let project = new Project({
            id: req.body.Projects[j].id,
            title: req.body.Projects[j].title,
            subtitle: req.body.Projects[j].subtitle,
            startDate: req.body.Projects[j].startDate,
            endDate: req.body.Projects[j].endDate,
            desc: req.body.Projects[j].desc,
        })
        project_array.push(project)
    }

    for (let k = 0; k < achievement_num; k++) {
        let achievement = new Achievement({
            id: req.body.Achievement[k].id,
            title: req.body.Achievement[k].title,
            desc: req.body.Achievement[k].desc,
        })
        achievement_array.push(achievement)
    }

    for (let l = 0; l < clubs_num; l++) {
        let clubs = new Clubs({
            id: req.body.Clubs[l].id,
            title: req.body.Clubs[l].title,
            startDate: req.body.Clubs[l].startDate,
            endDate: req.body.Clubs[l].endDate,
            desc: req.body.Clubs[l].desc,
        })
        clubs_array.push(clubs)
    }

    for (let m = 0; m < hackathons_num; m++) {
        let hackathons = new Hackathons({
            id: req.body.Hackathons[m].id,
            title: req.body.Hackathons[m].title,
            subtitle: req.body.Hackathons[m].subtitle,
            startDate: req.body.Hackathons[m].startDate,
            endDate: req.body.Hackathons[m].endDate,
            desc: req.body.Hackathons[m].desc,
        })
        hackathons_array.push(hackathons)
    }


    return [experience_array, project_array, achievement_array, clubs_array, hackathons_array]
}


app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}!`))
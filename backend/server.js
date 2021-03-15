"use strict";

// read the environment variable (will be 'production' in production mode)
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser"); // parse cookie header

const env = process.env.NODE_ENV
const CLIENT_HOME_PAGE_URL = "http://localhost:3000";
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

const { Template, Experience, Project } = require("./models/resumeTemplate")


app.use(
    cookieSession({
      name: "session",
      keys: "this-is-cheddar-secret-sshh",
      maxAge: 24 * 60 * 60 * 100
    })
  );

// parse cookies
app.use(cookieParser());


// enable CORS if in development, for React local development server to connect to the web server.
// if (env !== 'production') { app.use(cors()) }




// body-parser: middleware for parsing HTTP JSON body into a usable object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// // Express Session for managing user sessions
// const session = require("express-session");

// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
// }));





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

app.use(
    cors({
      origin: "http://localhost:3000", // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true // allow session cookie from browser to pass through
    })
  );
  


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
app.get('/google/callback', passport.authenticate('google', { successRedirect: CLIENT_HOME_PAGE_URL, failureRedirect: '/login/failed' }));


// when login is successful, retrieve user info
app.get("/login/success", (req, res) => {
    if (req.user) {
      res.json({
        success: true,
        message: "user has successfully authenticated",
        user: req.user,
        cookies: req.cookies
      });
    }
  });


  // when login failed, send failed msg
app.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "user failed to authenticate."
    });
});




// app.get('/login', (req, res) => {
//     res.redirect('/google');
// })


// Logging out of the session
app.get('/logout', (req, res) => {
    req.logout();
    res.send("User successfully logged out!")
    res.redirect(CLIENT_HOME_PAGE_URL);
});

// Middleware to protect and authenticate routes
const verifyAuthenication = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }
    else{
        res.status(401).json({
            authenticated: false,
            message: "user has not been authenticated"
          });
    }
}

/*
=============== Backend for Authentication Ends =====================
*/

// For testing, replace with actual homepage later.
app.get('/', verifyAuthenication, (req, res) => {
    res.status(200).json({
        authenticated: true,
        message: "user successfully authenticated",
        user: req.user,
        cookies: req.cookies
      });
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
app.patch("/Template/:template_id", async (req, res) => {

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
        res.status(404).send()
        return;
    }
    

    try {
        Template.updateOne({ _id: _template_id }, req.body).then(doc => {
            if (!doc) {
                return res.status(404).send()
            }
        })
        const query = Template.where({ _id: _template_id });
        query.findOne(function (err, temps) {
            if (err) return handleError(err);

            createSubSchema(req).then(result => {
                Template.updateOne({ _id: _template_id }, { "experiences": [...temps.experiences, ...result[0]], "projects": [...temps.projects, ...result[1]] }).then(doc => {
                    if (!doc) {
                        return res.status(404).send()
                    }
                })
            })
        });
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
        res.status(404).send()
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

// creates the template model and populates it with the request body data
async function makeTemplate(req) {

    const final = createSubSchema(req).then(result => {

        const template = new Template({
            userid: req.user,
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

    let experience_array = []
    let project_array = []

    for (let i = 0; i < experience_num; i++) {
        let experience = new Experience({
            date: req.body.experiences[i].date,
            description: req.body.experiences[i].description,
            company_name: req.body.experiences[i].company_name,
            position: req.body.experiences[i].position
        })
        experience_array.push(experience)
    }

    for (let j = 0; j < project_num; j++) {
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


app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}!`))
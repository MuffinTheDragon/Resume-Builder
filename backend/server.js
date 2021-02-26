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
const { ObjectID } = require('mongodb')
// const { User } = require("./models/user");
// const { Admin } = require("./models/admin")
const { Template, Experience, Project } = require("./models/resumeTemplate")


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

// GET the templates 
app.get('/Template/find/:template_id', async (req, res) => {

    const _id = req.params.template_id;

    if (!ObjectID(_id)) {
        res.status(404).send()
        return;
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    try {
        const template = await Template.findById(_id)
        if (!template) {
            res.status(404).send()
        }
        res.send(template)
    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    }

})


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


// UPDATE 

app.patch("/Template/update/:template_id", async (req, res) => {

    const _template_id = req.params.template_id

    if (!ObjectID(_template_id)) {
        res.status(404).send()
        return;
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
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

// Listening for api calls
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


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


/* Project Resume Template model */
'use strict';

const mongoose = require('mongoose')

// Creating the project resume template through mongoose schema
const ProjectSchema = new mongoose.Schema({
    personal: {
        name: {
            default: 'John Smith',
            type: String,
            required: true,
            trim: true
        },
        email: {
            default: 'john.smith@mail.com',
            type: String,
            required: true,
            trim: true
        },
        phone: {
            default: '(XXX)-XXX-XXXX',
            type: String,
            required: true,
            trim: true
        },
        personal_website: {
            type: String,
            required: false,
            trim: true
        },
        required: true
    },
    location: {
        city: {
            default: 'Mississauga',
            type: String,
            required: true,
            trim: true
        },
        countryCode: {
            default: 'A1B2C3',
            type: String,
            required: true,
            trim: true
        },
        region: {
            default: 'Ontario',
            type: String,
            required: true,
            trim: true
        }
    },
    profile: {
        platform: {
            type: String,
            required: false,
            trim: true
        },
        username: {
            type: String,
            required: false,
            trim: true
        },
        url: {
            type: String,
            required: false,
            trim: true
        },
        required: false
    },
    education: {
        city: {
            default: 'Mississauga',
            type: String,
            required: true,
            trim: true
        },
        degree: {
            type: String,
            required: true,
            trim: true
        },
        gpa: {
            type: Float32Array,
            required: false
        },
        graduation_date: {
            type: Date,
            required: true
        },
        school: {
            default: 'University of Toronto Mississauga',
            type: String,
            required: true,
            trim: true
        },
        start_date: {
            type: Date,
            required: true
        },
    },
    courses: {
        type: [String],
        required: false
    },
    projects: {
        type: [{project_name: {
                    type: String,
                    required: true,
                    trim: true
                },
                description: {
                    type: String,
                    required: false,
                    trim: false
                },
                start_date: {
                    type: Date,
                    required: true
                },
                end_date: {
                    type: Date,
                    required: true
                }
            }],
        required: true
    },
    skills: {
        type: [String],
        required: false
    },
    hobbies: {
        type: [String],
        required: false
    }
})

// make a model using the Project schema
const Project = mongoose.model('Project', ProjectSchema)
module.exports = { Project }
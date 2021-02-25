/* Experience Resume Template model */
'use strict';

const mongoose = require('mongoose')

// Creating the experience resume template through mongoose schema
const ExperienceSchema = new mongoose.Schema({
    personal: {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        },
        personal_website: {
            type: String,
            required: false,
            trim: true
        },
    },
    location: {
        city: {
            type: String,
            required: true,
            trim: true
        },
        countryCode: {
            type: String,
            required: true,
            trim: true
        },
        region: {
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
            type: mongoose.Decimal128,
            required: false
        },
        graduation_date: {
            type: Date,
            required: true
        },
        school: {
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
    experiences: {
        type: [{
            date: {
                type: Date,
                required: true
            },
            description: {
                type: String,
                required: false,
                trim: false
            },
            company_name: {
                type: String,
                required: true,
                trim: true
            },
            position: {
                type: String,
                required: true,
                trim: true
            }
        }],
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

// make a model using the Experience schema
const Experience = mongoose.model('Experience', ExperienceSchema)
module.exports = { Experience }
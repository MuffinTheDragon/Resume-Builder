/* Resume Template model */
'use strict';

const mongoose = require('mongoose')

// Creating the resume template through mongoose schema
const TemplateSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
        trim: true
    },
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
            type: Number,
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
    // experiences: {
    //     type: [{
    //         date: {
    //             type: Date,
    //             required: false
    //         },
    //         description: {
    //             type: String,
    //             required: false,
    //             trim: false
    //         },
    //         company_name: {
    //             type: String,
    //             required: false,
    //             trim: true
    //         },
    //         position: {
    //             type: String,
    //             required: false,
    //             trim: true
    //         }
    //     }],
    // },
    // projects: {
    //     type: [{
    //         project_name: {
    //             type: String,
    //             required: false,
    //             trim: true
    //         },
    //         description: {
    //             type: String,
    //             required: false,
    //             trim: false
    //         },
    //         start_date: {
    //             type: Date,
    //             required: false
    //         },
    //         end_date: {
    //             type: Date,
    //             required: false
    //         }
    //     }],
    // },
    skills: {
        type: [String],
        required: false
    },
    hobbies: {
        type: [String],
        required: false
    }
})

// make a model using the Template schema
const Experience = mongoose.model('Template', TemplateSchema)
module.exports = { Template }
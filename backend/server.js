"use strict";

// read the environment variable (will be 'production' in production mode)

const env = process.env.NODE_ENV

const express = require("express");
// starting the express server
const app = express();
const port = process.env.PORT || 5000;
const path = require('path')

// enable CORS if in development, for React local development server to connect to the web server.
const cors = require('cors')
if (env !== 'production') { app.use(cors()) }

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


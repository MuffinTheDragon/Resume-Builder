
const mongoose = require('mongoose')
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://backend_admin:acccdeh7@cheddar-cluster.x4rzo.mongodb.net/yolooo?retryWrites=true&w=majority'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

module.exports = { mongoose }  // Export the active connection.
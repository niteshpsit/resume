// Require Dependencies
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const config = require('./config')
const routes = require('./routes')
const bodyParser = require('body-parser')
// Initilize the app with express server
const app = express()

// connnect to the database resume
mongoose.connect(config.db.connection, error => {
    // Run only if server is unable to connect to the database with error display
    if (error)
        console.log(error)
});

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Include the routes in server file
routes(app);

/**
 * Define the public folder path that will contain the public file likes images, css, javascript, html 
 **/
app.use(express.static(path.join(__dirname, 'public')))

/**
 * Starting Server
 **/
app.listen(config.port, () => {
    console.log("server started at :", config.port)
})
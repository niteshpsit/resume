// Require Dependencies
const express = require('express')
const path = require('path')

// Initilize the app with express server
const app = express()

/**
 * Define the public folder path that will contain the public file likes images, css, javascript, html 
 **/
app.use(express.static(path.join(__dirname, 'public')))

/**
 * PORT : pass the port to the process or 3001
 **/
const port = process.env.PORT || 3001

/**
 * Starting Server At Given Port
 **/
app.listen(port,()=>{
    console.log("server started at :",port)
})

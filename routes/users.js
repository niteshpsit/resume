// Require Dependencies
const express = require('express')
const User = require('../models/users')
// Import the routes for moduler routing
const router = express.Router()

// Get endpoint for get the user data 
router.get('/',(req, res)=>{
    // Find All the Users detail
    User.find((err, users)=>{
        if(err)
            res.status(422).json(users)
        res.json(users)
    })
})

// Post endpoint for save the user data
router.post('/',(req, res)=>{

    // Make a new instance by using the User collection and save the in database
    new User(req.body).save((err,user)=>{
        if(err)
            res.status(422).json(err)
        res.json(user)
    })

})

// Delete the User data from database Permanently
router.delete('/:id',(req, res)=>{
    User.findByIdAndRemove(req.params.id,(err, user)=>{
        if(err)
            res.status(422).json(err)
        res.json(user)
    })
})
// Export the router 
module.exports = router
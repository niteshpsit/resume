
// Require all the dependencies
const users = require('./routes/users')

/**
 * Export a function for all the routes 
**/
module.exports = function(app){
    
    // Define the users endpoints
    app.use('/apis/users',users)
}
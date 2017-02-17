
// Require the dependencies
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define the user schema 
const userSchema = new Schema({
    name: String,
    profession: String,
    address: {
        house_no: String,
        landmark: String,
        citty: String,
        country: String
    },
    contact: {
        primary_phone: String,
        secondary_phone: String,
        sky_username: String,
        email: String,
    },
    image: String,
    languages_know: [String]
})

/**
 * Schema is useless so far
 *  we need to create model using it 
**/
const user = mongoose.model('User', userSchema)
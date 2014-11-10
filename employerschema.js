//use mongoose
var mongoose = require('mongoose');
//access the Schema object from Mongoose
var Schema = mongoose.Schema;

//make our schema "class"
var employerSchema = new Schema({
    //the username field
    username: { type: String, index: 1, required: true, unique: true },
    // the password field
    password: { type: String, index: 1, required: true},
    // the firstname field
    companyname: { type: String, index: 1, required: true},
    // the hometown field
    email: { type: String, index: 1, required: true },
    // the classification field
    location: { type: String, index: 1, required: true },
    // the classification field
    phone: { type: String, index: 1, required: true },
    
}, 
//use the 'employers' collection to apply this schema to
{
    collection: 'employers'
});


//make it useful outside of this file
exports.employerSchema = employerSchema; 
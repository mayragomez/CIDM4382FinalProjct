//use mongoose
var mongoose = require('mongoose');
//access the Schema object from Mongoose
var Schema = mongoose.Schema;

//make our schema "class"
var studentsSchema = new Schema({
    //the username field
    username: { type: String, index: 1, required: true, unique: true },
    // the password field
    password: { type: String, index: 1, required: true},
    // the firstname field
    firstname: { type: String, index: 1, required: true },
    // the last name field
    lastname: { type: String, index: 1, required: true },
    // phone
    phone: {type: String, index: 1, required: false},
    // the email field
    email: { type: String, index: 1, required: false},
    // the classification field
    classification: { type: String, index: 1, required: true }, // HS, JC, Freshman, Sophmore, Junior, Senior, Graduate
    //status
    status: { type: String, index: 1, required: true }, // Prospect, Current, Alumni
    //portfolio repository
    portfolio: {type: String, index: 1, required: false},
    //linkedin link
    linkedin: {type: String, index: 1, required: false}
}, 
//use the 'students' collection to apply this schema to
{
    collection: 'students'
});

//adds in a method to associate with this Schema object
studentsSchema.methods.fullName = function() {
    return this.firstname + " " + this.lastname;
};

//make it useful outside of this file
exports.studentsSchema = studentsSchema; 
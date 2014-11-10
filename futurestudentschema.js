//use mongoose
var mongoose = require('mongoose');
//access the Schema object from Mongoose
var Schema = mongoose.Schema;

//make our schema "class"
var futureStudentSchema = new Schema({
    //the username field
    username: { type: String, index: 1, required: true, unique: true },
    // the password field
    password: { type: String, index: 1, required: true},
    // the firstname field
    firstname: { type: String, index: 1, required: true },
    // the last name field
    lastname: { type: String, index: 1, required: true },
    // the email field
    email: { type: String, index: 1, required: true},
    //the hometown field
    hometown: {type:String, index: 1, required: true},
    //the classification field
    classification: {type: String, index:1, required: true},
    //the major field
    field: {type:String, index:1, required: true}
}, 
//use the 'professor' collection to apply this schema to
{
    collection: 'futurestudent'
});

//adds in a method to associate with this Schema object
futureStudentSchema.methods.fullName = function() {
    return this.firstname + " " + this.lastname;
};




//make it useful outside of this file
exports.futureStudentSchema = futureStudentSchema;
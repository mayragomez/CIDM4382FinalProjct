var mongoose = require('mongoose');
var connString = "mongodb://" + process.env.IP + ":27017/";
var readLine = require('readline');

// Menu System
var r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});




console.log("Job #1: Create database, create collection, and add all students to it.");
console.log("-------------------------------------------------------------------------");
r1.question("Please enter the number of the job you would like to run: ", function(answer) 
{
    switch (parseInt(answer)) 
    {
        case 1:
            console.log("\nYou selected job #1");
            console.log();
            CreateDatabaseAndCollection();
            break;
    } // end switch
    r1.close();
}); // end r1.question


// Job #1
function CreateDatabaseAndCollection() 
{
    var dbName = "professordb";

    //connect
    var professordb = mongoose.connect(connString + dbName);

    //get the schema - notice how we use the export
    var professorSchema = require('./professorschema.js').professorSchema;

    var Professor = mongoose.model('Professor', professorSchema);

    setTimeout(function() 
    {
        mongoose.disconnect();
    }, 5000);

    //again, once is the event-handling "hook" for when the database is opened
    mongoose.connection.once('open', function() 
    {

        //we create a new instance off the Model object
        var professor001 = new Professor(
        {
            username: "babb1",
            password: "password01",
            firstname: "Jeffery",
            lastname: "Babb",
            email: "babb@gmail.com",
            jobtitle: "CIDM Professor",
        });

        var professor002 = new Professor(
        {
            username: "Sean2",
            password: "password02",
            firstname: "Sean",
            lastname: "Humphreys",
            email: "sean@gmail.com",
            jobtitle: "CIDM Professor",
        });

         var professor003 = new Professor(
        {
            username: "Shan3",
            password: "password03",
            firstname: "Shan",
            lastname: "Fan",
            email: "fan@gmail.com",
            jobtitle: "CIDM Professor",
        });

         var professor004 = new Professor(
        {
            username: "dana4",
            password: "password04",
            firstname: "Dana",
            lastname: "Vanilla",
            email: "dana@gmail.com",
        });

        var professor005 = new Professor(
        {
            username: "jafar4",
            password: "password04",
            firstname: "jafar",
            lastname: "ozarka",
            email: "jafar@gmail.com",
        });

 Professor.create([professor001, professor002, professor003, professor004, professor005,], function(err, records) 
        {
            console.log("\nThese are the student documents that were created:");
            var query = Professor.find();
            query.exec(function(err, docs) 
            {
                for (var i in docs) 
                {
                    console.log(docs[i].fullName());
                } // end for loop
            }); // end query.exec
        }); // end Student.create
    }); // end mongoose.connection
} // end CreateDatabaseAndCollectionFunction


function BlankFunction() 
{
    var dbName = "studentsdb";

    //connect
    var professordb = mongoose.connect(connString + dbName);

    //get the schema - notice how we use the export
    var professorSchema = require('./students_schema.js').professorSchema;

    var Professor = mongoose.model('Students', professorSchema);

    setTimeout(function() 
    {
        mongoose.disconnect();
    }, 5000);

    //again, once is the event-handling "hook" for when the database is opened
    mongoose.connection.once('open', function() 
    {
        
        // this is were all the stuff goes
        
    }); // end mongoose.connection
} // end BlankFunction function
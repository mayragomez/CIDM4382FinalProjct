var mongoose = require('mongoose');
var connString = "mongodb://" + process.env.IP + ":27017/";
var readLine = require('readline');

// Menu System
var r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("\nAssignment 6 Menu");
console.log("Choose any of the jobs below.");
console.log("***Warning: you must run job #1 at least once before the others.***");
console.log("-------------------------------------------------------------------------");
console.log("Job #1: Clear collection")
console.log("Job #2: Create database, create collection, and add all students to it.");

r1.question("Please enter the number of the job you would like to run: ", function(answer) 
{
    switch (parseInt(answer)) 
    {
        case 1:
            console.log("\nYou selected job #1");
            console.log();
            DeleteCollection();
            break;
            
        case 2:
            console.log("\nYou selected job #2");
            console.log();
            CreateDatabaseAndCollection();
            break;
    } // end switch
    r1.close();
}); // end r1.question


// Job #1
function CreateDatabaseAndCollection() 
{
    var dbName = "studentsdb";

    //connect
    var studentsdb = mongoose.connect(connString + dbName);

    //get the schema - notice how we use the export
    var studentsSchema = require('./studentschema.js').studentsSchema;

    var Students = mongoose.model('Students', studentsSchema);

    setTimeout(function() 
    {
        mongoose.disconnect();
    }, 5000);

    //again, once is the event-handling "hook" for when the database is opened
    mongoose.connection.once('open', function() 
    {

        //we create a new instance off the Model object
        var student001 = new Students(
        {
            username: "jason1",
            password: "password01",
            firstname: "Jason",
            lastname: "Madison",
            email: "jmadison@gmail.com",
            classification: "Senior",
            major: "CIS",
            portfolio: "@github.com",
            linkedin:"",
            status: "Current"
        });

        var student002 = new Students(
        {
            username: "secia1",
            password: "password01",
            firstname: "Secia",
            lastname: "Chase",
            email: "schase@gmail.com",
            classification: "N/A",
            portfolio: "@github.com",
            linkedin:"",
            status: "Alumni"
        });

        var student003 = new Students(
        {
            username: "lauren1",
            password: "password03",
            firstname: "Lauren",
            lastname: "Alvarez",
            email: "lalvarez@gmail.com",
            classification: "JC",
            portfolio: "@github.com",
            linkedin:"",
            status: "Prospect"
            
        });

        var student004 = new Students(
        {
            username: "anthony1",
            password: "password04",
            firstname: "Anthony",
            lastname: "Petruccione",
            email: "anthony@gmail.com",
            classification: "HS",
            portfolio: "@github.com",
            linkedin:"",
            status:"Prospect"
        });

        var student005 = new Students(
        {
            username: "Mayra1",
            password: "password05",
            firstname: "Mayra",
            lastname: "Gomez",
            email: "mgomez@gmail.com",
            classification: "Senior",
            portfolio: "@github.com",
            linkedin:"",
            status: "Current"
        });

 Students.create([student001, student002, student003, student004, student005,], function(err, records) 
        {
            console.log("\nThese are the student documents that were created:");
            var query = Students.find();
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

function DeleteCollection() 
{
    var dbName = "studentsdb";

    //connect
    var studentsdb = mongoose.connect(connString + dbName);

    //get the schema - notice how we use the export
    var studentsSchema = require('./studentschema.js').studentsSchema;
    var Students = mongoose.model('Students', studentsSchema);
    setTimeout(function() 
    {
        mongoose.disconnect();
    }, 5000);
    mongoose.connection.once('open', function() 
    {
        Students.find({}, function(err, docs) 
        {
            console.log("Before delete: ");
            for (var i in docs) 
            {
                console.log(docs[i].fullName());
            }
            var query = Students.remove();
            query.exec(function(err, results) 
            {
                console.log("\n%d Documents Deleted.", results);
                Students.find({}, function(err, docs) 
                {
                    console.log("\nAfter delete: ");
                    for (var i in docs) 
                    {
                        console.log(docs[i].fullName());
                    }
                    mongoose.disconnect();
                }); // end Students.find
            }); // end query.exec
        }); // end Students.find
    }); // end mongoose.connection
} // end DeleteCollection function

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
console.log("Job #1: Create database, create collection, and add all students to it.");

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
            hometown: "Richardson",
            classification: "Senior",
            major: "CIS"
        });

        var student002 = new Students(
        {
            username: "secia1",
            password: "password01",
            firstname: "Secia",
            lastname: "Chase",
            email: "schase@gmail.com",
            hometown: "Dallas",
            classification: "Freshman",
            major: "CIS"
        });

        var student003 = new Students(
        {
            username: "lauren1",
            password: "password03",
            firstname: "Lauren",
            lastname: "Alvarez",
            email: "lalvarez@gmail.com",
            hometown: "Amarillo",
            classification: "Senior",
            major: "CIS"
        });

        var student004 = new Students(
        {
            username: "anthony1",
            password: "password04",
            firstname: "Anthony",
            lastname: "Petruccione",
            email: "anthony@gmail.com",
            hometown: "Canyon",
            classification: "Senior",
            major: "CIS"
        });

        var student005 = new Students(
        {
            username: "Mayra1",
            password: "password05",
            firstname: "Mayra",
            lastname: "Gomez",
            email: "mgomez@gmail.com",
            hometown: "Canyon",
            classification: "Senior",
            major: "CIS"
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


function BlankFunction() 
{
    var dbName = "studentsdb";

    //connect
    var studentsdb = mongoose.connect(connString + dbName);

    //get the schema - notice how we use the export
    var studentsSchema = require('./students_schema.js').studentsSchema;

    var Students = mongoose.model('Students', studentsSchema);

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
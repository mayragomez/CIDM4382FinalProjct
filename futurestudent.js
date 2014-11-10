var mongoose = require('mongoose');
var connString = "mongodb://" + process.env.IP + ":27017/";
var readLine = require('readline');

// Menu System
var r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Job #1: Create database, create collection, and add all students to it.");
console.log("Job #2: Delete Collection");
console.log("Job #3: Displays future students");
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
            
        case 2:
            console.log("\nYou selected job #2");
            console.log();
            DeleteCollection();
            break;
            
        case 3:
            console.log("\nYou selected job #3");
            console.log();
            DisplayStudentsCollectionObjects();
            break;
    } // end switch
    r1.close();
}); // end r1.question


// Job #1
function CreateDatabaseAndCollection() 
{
    var dbName = "futureStudentdb";

    //connect
    var futureStudentdb = mongoose.connect(connString + dbName);

    //get the schema - notice how we use the export
    var futureStudentSchema = require('./futurestudentschema.js').futureStudentSchema;

    var futurestudent = mongoose.model('futurestudent', futureStudentSchema);

    setTimeout(function() 
    {
        mongoose.disconnect();
    }, 5000);

    //again, once is the event-handling "hook" for when the database is opened
    mongoose.connection.once('open', function() 
    {

        //we create a new instance off the Model object
        var futurestudent001 = new futurestudent(
        {
            username: "manuel1",
            password: "password01",
            firstname: "Manuel",
            lastname: "Garcia",
            email: "mgarcia@gmail.com",
            hometown: "Amarillo",
            classification: "Senior",
            major: "CIS"
        });

        var futurestudent002 = new futurestudent(
        {
            username: "mary2",
            password: "password02",
            firstname: "Mary",
            lastname: "Chase",
            email: "mchase@gmail.com",
            hometown: "Dallas",
            classification: "Freshman",
            major:"CIS"
            
        });

        var futurestudent003 = new futurestudent(
        {
            username: "sunny3",
            password: "password03",
            firstname: "Sunny",
            lastname: "Plowman",
            email:"splowman@gmail.com",
            hometown: "Amarillo",
            classification: "Senior",
            major:"CIS"

        });

        var futurestudent004 = new futurestudent(
        {
            username:"anthony4",
            password: "password04",
            firstname: "Anthony",
            lastname: "Smith",
            email:"asmith@gmail.com",
            hometown: "Canyon",
            classification: "Senior",
            major:"undecided"
        });

        var futurestudent005 = new futurestudent(
        {
            username:"lucy5",
            password: "password05",
            firstname: "Lucy",
            lastname: "Wu",
            email:"lwu@gmail.com",
            hometown: "Plano",
            classification: "Senior",
            major:"undecided"

        });

 futurestudent.create([futurestudent001, futurestudent002, futurestudent003, futurestudent004, futurestudent005], function(err, records) 
        {
            console.log("\nThese are the student documents that were created:");
            var query = futurestudent.find();
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
    var dbName = "futurestudentdb";

    //connect
    var futurestudentdb = mongoose.connect(connString + dbName);

    //get the schema - notice how we use the export
    var futureStudentSchema = require('./futurestudentschema.js').futureStudentSchema;
    var futurestudent = mongoose.model('futurestudent', futureStudentSchema);
    setTimeout(function() 
    {
        mongoose.disconnect();
    }, 5000);
    mongoose.connection.once('open', function() 
    {
        futurestudent.find({}, function(err, docs) 
        {
            console.log("Before delete: ");
            for (var i in docs) 
            {
                console.log(docs[i].fullName());
            }
            var query = futurestudent.remove();
            query.exec(function(err, results) 
            {
                console.log("\n%d Documents Deleted.", results);
                futurestudent.find({}, function(err, docs) 
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


// Job #2
function DisplayStudentsCollectionObjects() 
{
    var dbName = "futurestudentdb";

    //connect
    var futurestudentdb = mongoose.connect(connString + dbName);

    //get the schema - notice how we use the export
    var futureStudentSchema = require('./futurestudentschema.js').futureStudentSchema;

    var futurestudent = mongoose.model('futurestudent', futureStudentSchema);

    setTimeout(function() 
    {
        mongoose.disconnect();
    }, 5000);

    //again, once is the event-handling "hook" for when the database is opened
    mongoose.connection.once('open', function() 
    {
        console.log("\nThese are the student documents that exist right now.");
        var query = futurestudent.find();
        query.exec(function(err, docs) 
        {
            for (var i in docs) 
            {
                console.log("ID Number: " + docs[i].idnumber);
                console.log("Name: " + docs[i].fullName());
                console.log("Hometown: " + docs[i].hometown);
                console.log("Classification: " + docs[i].classification);
            } // end for loop
        }); // end query.exec
    }); // end mongoose.connection
} // end DisplayStudentsCollectionObjects function


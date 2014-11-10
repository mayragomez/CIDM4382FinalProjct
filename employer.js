var mongoose = require('mongoose');
var connString = "mongodb://" + process.env.IP + ":27017/";
var readLine = require('readline');

// Menu System
var r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("Job #1: Create database, create collection, and add all employers to it.");
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
    var dbName = "employerdb";

    //connect
    var employerdb = mongoose.connect(connString + dbName);

    //get the schema - notice how we use the export
    var employerSchema = require('./employerschema.js').employerSchema;

    var Employers = mongoose.model('Employers', employerSchema);

    setTimeout(function() 
    {
        mongoose.disconnect();
    }, 5000);

    //again, once is the event-handling "hook" for when the database is opened
    mongoose.connection.once('open', function() 
    {

        //we create a new instance off the Model object
        var employer001 = new Employers(
        {
            username: "pan01",
            password: "password01",
            companyname: "Pantex",
            email: "pantex@gmail.com",
            location: "Amarillo",
            phone: "8063546677"
        });

        var employer002 = new Employers(
        {
            username: "csi1",
            password: "password01",
            companyname: "CSI",
            email: "csi@gmail.com",
            location: "Dallas",
            phone:"525-342-4455"
        });

        var employer003 = new Employers(
        {
            username: "applebite",
            password: "password03",
            companyname: "IApple Bite",
            email: "applebite@gmail.com",
            location: "Amarillo",
            phone:"806-342-3123"
        });

        var employer004 = new Employers(
        {
            username: "target1",
            password: "password04",
            companyname: "Target",
            email: "target@gmail.com",
            location: "Canyon",
            phone:"233-400-8900"
        });

        var employer005 = new Employers(
        {
            username: "insurance1",
            password: "password05",
            companyname: "Geico",
            email: "geico@gmail.com",
            location: "Canyon",
            phone:"567-209-6540"
        });

 Employers.create([employer001, employer002, employer003, employer004, employer005,], function(err, records) 
        {
            console.log("\nThese are the student documents that were created:");
            var query = Employers.find();
            query.exec(function(err, docs) 
            {
                for (var i in docs) 
                {
                    console.log(docs[i].companyname);
                } // end for loop
            }); // end query.exec
        }); // end Student.create
    }); // end mongoose.connection
} // end CreateDatabaseAndCollectionFunction


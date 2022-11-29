var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/KM035";

MongoClient.connect(url, {useUnifiedTopology: true}, 
    function(err,db) {
    if (err) throw err;
    var dbo = db.db("KM035");
    var myobj=[
        {name:'Manoj',course:'Node js',marks:98,Grade:'0',Mode:'Regular'},
        {name:'Dhoni',course:'Node js',marks:98},
        {name:'Anu',course:'React js',marks:98},
        {name:'Ram',course:'HTML',marks:98},
        {name:'Tej',course:'Angular js',marks:98},
    ];
    dbo.createCollection("User_data").insertMany(myobj, function (err,data) {
        if (err) throw err;
        console.log("Number of document inserted: "+data.insertedCount);
        db.close();
    }); 
});
/*var express = require('express');
var app = express();
var PORT = 3000;
  
app.get('/Name', (req, res) => {
  res.send("My name is Ayush Ranjan")
})


app.get('/Reg', (req, res) => {
    res.send("My Registration number is 11912170")
  })


  app.get('/course', (req, res) => {
    res.send("Name of the course is INT222 Node.js")
  })
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
}); */


var express = require('express');
var app = express();
var PORT = 3000;
  
app.all('/user', function (req, res, next) {
    console.log('USER API CALLED');
    next(); 

    =
});
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
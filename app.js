var express = require('express');
var path = require('path');

//initial app
var app = express();

//view engine setup
app.set("views", path.join(__dirname,"views"));
app.set("View engine","ejs");

//setup public folder
app.use(express.static(path.join(__dirname,"")));

//setup server

var port = 3000;
app.listen(port,function(){

    console.log("Server running on port " + port);
})

app.get('/', function(req, res) {
	res.send("It's Work!")
});

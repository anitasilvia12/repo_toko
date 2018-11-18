var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
//connection sintax
mongoose.connect('mongodb://localhost/toko-online');
//setup db
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
	console.log('Connected to MongoDB')
});

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
	res.send("ini jalan yah. di index!")
});
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", function(req, res) {
// 	console.log('Hello')
//   	res.sendFile(path.join(__dirname, "public.html"));

// });

	require("./routing/htmlRoutes.js")(app);
	app.use(express.static('public'))

















app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
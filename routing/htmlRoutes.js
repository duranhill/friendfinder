var path = require("path");
module.exports = function(app) {



// your routes!!
app.get("/", function(req, res) {
	console.log('Hello')
  	res.sendFile(path.join(__dirname, "../public/public.html"));
});
}
var express = require("express");
var path = require("path");
var htmlRoutes = require('./app/routing/htmlRoutes');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
// });
// app.get("/survey", function(req,res){
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });
var htmlRoutes = require('./app/routing/htmlRoutes')();
app.use(htmlRoutes);
var apiRoutes = require('./app/routing/apiRoutes')();
app.use(apiRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  

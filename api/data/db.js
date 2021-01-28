require("./falcuties-model.js");
require("./students-model.js");

var mongoose = require("mongoose");
var dbURL = "mongodb://localhost:27017/meanGamesDb";
// var dbURL = "mongodb://localhost:27017/SchoolDB";

mongoose.connect(dbURL, {useNewUrlParser: true});

var db = mongoose.connection;

db.on("connected", function () {
  console.log("mongoose connected to " + dbURL);
});

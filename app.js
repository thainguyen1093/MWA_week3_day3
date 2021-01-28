var express = require("express");
var router = require("./routes");
var path = require("path");
var bodyParser = require("body-parser")

var app = express();

var port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", router);

app.listen(port, () => {
  console.log("connected to server at port " + port)
})



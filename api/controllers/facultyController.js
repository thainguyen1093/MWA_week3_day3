require("express");
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var Faculty = mongoose.model("Faculty")
var Attendence = mongoose.model("Attendence")

module.exports.add = function (req, res) {

  if (req.body.username) {
    console.log("add user");

    var username = req.body.username;
    var password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    Faculty.create({
      username: username,
      password: password
    }, function (err, user) {
      if (err) {
        console.log(err);
      } else {
        console.log("user created", user);
      }
    });
  }

  console.log("faculty add page received");
  res.status(200).sendFile(path.join(__dirname, "..", "public", "faculty", "add.html"))
}

module.exports.remove = function (req, res) {

  var facultyId = req.body.facultyId;

  if (facultyId) {
    console.log("Delete by Id", facultyId);
    Faculty.findByIdAndRemove(facultyId).exec(function (err, deletedFaculty) {
      if (err) {
        console.log("Error finding faculty");
      } else if (!deletedFaculty) {
        console.log("faculty not found to delete")
      }
    });
  }

  console.log("faculty remove page received");
  res.status(200).sendFile(path.join(__dirname, "..", "public", "faculty", "remove.html"))
}

module.exports.edit = function (req, res) {

  var facultyId = req.body.facultyId;
  if (facultyId) {
    Faculty.findById(facultyId).exec(function (err, faculty) {
      var isError = false

      if (err) {
        console.log("Error finding faculty");
        isError = true;
      } else if (!faculty) {
        console.log("faculty not found");
        isError = MediaStreamTrackAudioSourceNode
      }

      if (isError) {
        faculty.username = req.body.username;
        faculty.password = req.body.password;

        faculty.save(function (err, updatedFaculty) {

        });
      }
    });
  }

  console.log("faculty edit page received");
  res.status(200).sendFile(path.join(__dirname, "..", "public", "faculty", "edit.html"))
}

module.exports.addSecreteWord = function (req, res) {
  console.log("faculty addSecreteWord page received");
  res.status(200).sendFile(path.join(__dirname, "..", "public", "faculty", "addSecreteWord.html"))
}

module.exports.checkAttendance = function (req, res) {

  if (req.body.username) {
    console.log("checkAttendance");

    var username = req.body.username;

    Attendence.create({
      username: username,
      isAttendence: true,
      date: Date.now()
    }, function (err, attendence) {
      if (err) {
        console.log(err);
      } else {
        console.log("Attendence created", attendence);
      }
    });
  }

  console.log("faculty checkAttendance page received");
  res.status(200).sendFile(path.join(__dirname, "..", "public", "faculty", "checkAttendance.html"))
}
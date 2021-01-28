require("express");
var mongoose = require("mongoose");

var Student = mongoose.model("Student")
var bcrypt = require("bcrypt-nodejs")


module.exports.create = function (req, res) {

  if (req.body.username) {
    console.log("create data", req.body)
    Student.create({
      title: req.body.username,
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    }, function (err, student) {
      if (err) {
        console.log("created fail");
      } else {
        console.log("created success");
      }
    })
  }

  console.log("student create page received");
  res.status(200).sendFile(path.join(__dirname, "..", "public", "student", "create.html"))
}

module.exports.delete = function (req, res) {

  var studentId = req.body.studentId;
  if (studentId) {

    console.log("Delete by Id", studentId);
    Student.findByIdAndRemove(studentId).exec(function (err, deletedStudent) {

      if (err) {
        console.log("Error finding student");

      } else if (!deletedJob) {
        console.log("No student to delete");
      }
    });
  }

  console.log("student delete page received");
  res.status(200).sendFile(path.join(__dirname, "..", "public", "student", "delete.html"))
}

module.exports.login = function (req, res) {

  if (req.body.username) {
    console.log("Loggin in user");
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({ username: username }).exec(function (err, user) {
      if (err) {
        console.log(err);
      }

      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          console.log("user found", user);
        } else {
          console.log("Unauthorized");
        }
      } else {
        console.log("user not found", user);
      }
    })
  }

  console.log("student login page received");
  res.status(200).sendFile(path.join(__dirname, "..", "public", "student", "login.html"))
}

module.exports.update = function (req, res) {

  var studentId = req.body.studentId;
  if (studentId) {
    Student.findById(studentId).exec(function (err, student) {
      var isError = false;
      if (err) {
        console.log("Error finding student");
        isError = true;
      } else if (!studentId) {
        console.log("student not found");
        ror = true;
      }

      if (isError) {
        student.username = req.body.username;
        student.password = req.body.password;

        student.save(function (err, updatedStudent) {

        });
      }
    });
  }

  console.log("student update page received");
  res.status(200).sendFile(path.join(__dirname, "..", "public", "student", "update.html"))
}


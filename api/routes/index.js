var express = require("express");
var router = express.Router();
var path = require("path");

var facultiController = require("../controllers/facultyController");

var studentController = require("../controllers/studentController");

router.route("/faculty/add")
  .get(facultiController.add);
router.route("/faculty/remove")
  .get(facultiController.remove);
router.route("/faculty/edit")
  .get(facultiController.edit);
router.route("/faculty/addSecreteWord")
  .get(facultiController.addSecreteWord);
router.route("/faculty/checkAttendance")
  .get(facultiController.checkAttendance);

  router.route("/student/create")
  .get(studentController.create);
router.route("/student/delete")
  .get(studentController.delete);
router.route("/student/login")
  .get(studentController.login);
router.route("/student/update")
  .get(studentController.update);

module.exports = router;

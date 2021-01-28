var mongoose = require("mongoose");

var attendenceSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true
  },
  isAttendence: Boolean,
  date: Date,
  note: String
});

var facultySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: String
});

mongoose.model("Attendence", attendenceSchema)
mongoose.model("Faculty", facultySchema)
var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: String
});

mongoose.model("Student", studentSchema)
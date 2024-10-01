const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  status: { type: Boolean, required: true, default: false },
  createdBy: { type: String, required: true },
});

const TodoModel = mongoose.model("todo", userSchema);
module.exports = { TodoModel };

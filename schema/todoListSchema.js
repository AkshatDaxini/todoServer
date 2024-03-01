const mongoose = require("mongoose");

const todoListSchema = new mongoose.Schema(
  {
    taskName: String,
    taskDescription: String,
    dueDate: Date,
    priority: String,
    status: {
      type: String,
      default: "Not Started",
    },
    requester: String,
    owner: String,
    comments: String,
    fileLink: String,
    delete_flag: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const collectionName = "todo";
module.exports = mongoose.model("todoModel", todoListSchema, collectionName);

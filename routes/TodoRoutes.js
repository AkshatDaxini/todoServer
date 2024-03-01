"use strict";
const TodoModel = require("../model/todoModel");

module.exports = function (app) {
  app
    .route("/todo")
    .get(TodoModel.getAllTask)
    .post(TodoModel.insertTask)
    .put(TodoModel.updateTask);
};

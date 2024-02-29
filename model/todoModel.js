"user strict";

const todoModel = require("../schema/todoListSchema");
const mongoose = require("mongoose");
var connectionWatch = require("../server/db");

exports.insertTask = function (req, res) {
  let data = req.body;
  try {
    const result = todoModel.insertMany(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.getAllTask = function (req, res) {
  try {
    const result = todoModel.find({
      delete_flag: false,
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

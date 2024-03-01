"user strict";

const todoModel = require("../schema/todoListSchema");
const mongoose = require("mongoose");
var connectionWatch = require("../server/db");

exports.insertTask = async function (req, res) {
  let data = req.body;
  try {
    const result = await todoModel.insertMany(data);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.getAllTask = async function (req, res) {
  try {
    const result = await todoModel.find({
      delete_flag: false,
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.updateTask = async function (req, res) {
  let data = req.body;
  try {
    const result = await todoModel.findByIdAndUpdate(data._id, data);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

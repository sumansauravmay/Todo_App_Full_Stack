const express = require("express");
const { TodoModel } = require("../models/todo.model");
const todoRouter = express.Router();

todoRouter.post("/post/todo", async (req, res) => {
  const payload = req.body;
  try {
    let new_post = new TodoModel({ ...payload, createdBy: username });
    await new_post.save();
    res.status(200).send({ msg: "User Posted!", createdBy: username });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error" });
  }
});

todoRouter.get("/todo/get", async (req, res) => {
  try {
    let data = await TodoModel.find();
    res.status(200).send({ msg: data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error" });
  }
});

todoRouter.patch("/todo/update/:id", async (req, res) => {
  const payload = req.body;
  const ID = req.params.id;
  try {
    await TodoModel.findByIdAndUpdate({ _id: ID }, payload);
    res.status(200).send({ msg: "data is updated!" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error" });
  }
});

todoRouter.delete("/todo/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await TodoModel.findByIdAndDelete({ _id: ID });
    res.status(200).send({ msg: "Task Deleted!" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Can not be deleted" });
  }
});

module.exports = { todoRouter };

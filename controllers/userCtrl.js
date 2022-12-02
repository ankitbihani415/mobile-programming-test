const userModel = require("../models/user");

async function listUser(req, res) {
  const users = await userModel.find();
  res.status(200).json({ users });
}

async function showUser(req, res) {
  const id = req.params.id;
  const user = await userModel.findById(id);
  if (user) {
    res.status(200).json({ user });
  } else {
    res.status(400).json({ error: ["user not found"] });
  }
}

async function createUser(req, res) {
  const body = req.body;
  let errors = [];
  ["name", "email", "phone"].map((key) => {
    if (!body[key]) {
      errors.push(`${key} is required field.`);
    }
  });
  if (errors.length) {
    res.status(400).json({ errors });
  } else {
    const user = await userModel.create(body);
    res.status(200).json({ user });
  }
}

async function updateUser(req, res) {
  const body = req.body;
  const id = req.params.id;
  let errors = [];
  const keys = Object.keys(body);
  ["name", "email", "phone"].map((key) => {
    if (key.includes(keys) && !body[key]) {
      errors.push(`${key} is can not be an empty field.`);
    }
  });
  if (errors.length) {
    res.status(400).json({ errors });
  }
  const user = await userModel.updateOne({ id }, body);
  if (user) {
    res.status(200).json({ user });
  } else {
    res.status(400).json({ error: ["user not found"] });
  }
}

async function deleteUser(req, res) {
  const id = req.params.id;
  const user = await userModel.findByIdAndDelete(id);
  if (user) {
    res.status(204).json({ msg: "User deleted" });
  } else {
    res.status(400).json({ error: ["user not found"] });
  }
}

module.exports = {
  listUser,
  showUser,
  createUser,
  updateUser,
  deleteUser,
};

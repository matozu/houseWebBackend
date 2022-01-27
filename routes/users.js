import express from "express";
import Joi from "joi";
import { readUsers, writeUsers } from "../data/adapter.js";

const router = express.Router();

function validateUser(user) {
  const schema = Joi.object({
    username: Joi.string().min(3).max(25).required(),
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(user);
}

router.get("/", async (req, res) => {
  res.send(await readUsers());
});

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    res.status(400).send(error.message);
    return;
  }

  const users = await readUsers();
  if (users.some((u) => u.username === req.body.username)) {
    res.status(400).send("user exist");
    return;
  } else {
    const user = {
      username: req.body.username,
      password: req.body.password,
    };

    users.push(user);
    const w = await writeUsers(JSON.stringify(users));
    console.log(w);
    res.send(user);
  }
});

router.delete("/:username", async (req, res) => {
  const users = await readUsers();
  const user = users.find((u) => u.username === req.params.username);
  if (user) {
    const index = users.indexOf(user);
    if (index != -1) {
      users.splice(index, 1);
    }
    const w = await writeUsers(JSON.stringify(users));
    res.send(user);
  } else {
    res.status(404).send("user not found!");
  }
});

export default router;

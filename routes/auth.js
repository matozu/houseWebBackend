import jwt from "jsonwebtoken";
import config from "config";
import express from "express";
import Joi from "joi";
import { readUsers } from "../data/adapter.js";
import bcrypt from "bcrypt";

const router = express.Router();

function validate(req) {
  const schema = Joi.object({
    username: Joi.string().min(3).max(25).required(),
    password: Joi.string().min(3).max(255).required(),
  });

  return schema.validate(req);
}

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    res.status(400).send(error.message);
    return;
  }

  const users = await readUsers();

  const user = users.find((u) => u.username === req.body.username);
  if (!user) return res.status(400).send("invalid username or password!!!");

  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isValidPassword) {
    const privateKey = config.get("jwtPrivateKey");
    const token = jwt.sign(
      { _username: user.username },
      privateKey ?? "privateKey"
    );
    return res.header("x-auth-token", token).send({
      username: user.username,
      pk: privateKey
        ? "private key from environment variable"
        : "environment variable backendWebHouse_privateKey not found! using temporary privatekey",
    });
  } else {
    return res.status(400).send("invalid username or password");
  }
});

export default router;

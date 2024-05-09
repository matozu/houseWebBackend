import jwt from "jsonwebtoken";
import config from "config";
import express from "express";
import Joi from "joi";
import bcrypt from "bcrypt";
import User from "../data/user.js";

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
    return res.status(400).send(error.message);
  }

  const user = await User.findOne({ username: req.body.username });

  if (!user) return res.status(400).send("invalid username or password!");

  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isValidPassword) {
    const privateKey = config.get("jwtPrivateKey");
    const token = jwt.sign({ _username: user.username }, privateKey);
    return res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .send(user);
  } else {
    return res.status(400).send("invalid username or password!");
  }
});

export default router;

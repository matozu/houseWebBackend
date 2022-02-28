import express from "express";
import Joi from "joi";
import bcrypt from "bcrypt";
import auth from "../middleware/auth.js";
import User from "../data/user.js";

const router = express.Router();

function validateUser(user) {
  const schema = Joi.object({
    username: Joi.string().min(3).max(25).required(),
    password: Joi.string().min(3).max(255).required(),
  });
  return schema.validate(user);
}

router.get("/me", auth, (req, res) => {
  res.send(req.user._username);
});

router.get("/", async (req, res) => {
  res.send(await User.find());
});

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    res.status(400).send(error.message);
    return;
  }

  const user = await User.findOne({ username: req.body.username });
  if (user) {
    res.status(400).send("user exist");
    return;
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    const result = await user.save();
    res.send(result);
  }
});

router.delete("/:username", auth, async (req, res) => {
  const user = await User.findOne({ username: req.params.username });
  if (user) {
    const result = await User.deleteOne({ username: req.params.username });
    res.send(result);
  } else {
    res.status(404).send("user not found!");
  }
});

export default router;

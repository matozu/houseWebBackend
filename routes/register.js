import express from "express";
import User from "../data/user.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import config from "config";
import EmailVerification from "../data/email-verification.js";

async function sendMail(to, link) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "housewebbackend@gmail.com",
      pass: config.get("mailkey"),
    },
  });

  transporter
    .sendMail({
      to: to,
      subject: "test",
      text: link,
    })
    .then(() => {
      console.log("email sent to " + to);
    })
    .catch((error) => {
      console.log(error);
    });
}

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(400).send("Username exist!");
    }
    const tmp_key = (Math.random() + "").split(".")[1];
    const link =
      "https://housewebbackend.onrender.com/api/register?key=" +
      tmp_key +
      "&user=" +
      req.body.username;
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    let emailVerification = new EmailVerification({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
      tmp_key: tmp_key,
      createdAt: new Date(),
    });

    emailVerification = await emailVerification.save();

    sendMail(req.body.email, link);
    return res.status(200).send(emailVerification);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const { key, user } = req.query;
    const emailVerification = await EmailVerification.findOne({
      username: user,
    });

    if (
      emailVerification &&
      emailVerification.username === user &&
      emailVerification.tmp_key === key
    ) {
      let newUser = new User({
        username: emailVerification.username,
        password: emailVerification.password,
      });

      newUser = await newUser.save();

      return res.status(200).send(`
        <div style="text-align: center;">
          <h3>You are registered as a new user at</h3>
            <a href="https://housewebbackend.onrender.com/" style="display: block;">
              <h6>housewebbackend.onrender.com</h6>
            </a>
        </div>
      `);
    } else {
      return res.status(400).send("Invalid registration request");
    }
  } catch (error) {
    console.log("ERROR : ", error);
    res.status(500).send("Internal server error");
  }
});

export default router;

import express from "express";
import Message from "../data/message.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const messages = await Message.find({ to: req.user._username });
    res.send(messages);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    let message = new Message({
      date: req.body.date,
      text: req.body.text,
      to: req.body.to,
      from: req.user._username,
      read: false,
    });

    message = await message.save();
    res.send(message);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const result = await Message.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (e) {
    res.status(404).send(e);
  }
});

export default router;

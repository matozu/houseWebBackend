import express from "express";
import Joi from "joi";
import auth from "../middleware/auth.js";
import Note from "../data/note.js";
const router = express.Router();

function validateDay(day) {
  const schema = Joi.object({
    date: Joi.date().required(),
    text: Joi.string().required(),
    username: Joi.string().required(),
  });
  return schema.validate(day);
}

router.get("/", async (req, res) => {
  const data = await Note.find().sort({ date: 1 });
  res.send(data);
});

router.post("/", auth, async (req, res) => {
  const { error } = validateDay(req.body);
  if (error) {
    res.status(400).send(error.message);
    return;
  }

  let note = new Note({
    date: req.body.date,
    text: req.body.text,
    username: req.body.username,
  });

  note = await note.save();
  res.send(note);
});

router.put("/", auth, async (req, res) => {
  try {
    const result = await Note.updateOne(
      { _id: req.body.id },
      {
        $set: { text: req.body.text },
      }
    );
    res.send(result);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const result = await Note.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (e) {
    res.status(404).send(e);
  }
});

export default router;

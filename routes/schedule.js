import express from "express";
import Joi from "joi";
import { readData, writeData } from "../data/adapter.js";

const router = express.Router();

function validateDay(day) {
  const schema = Joi.object({
    date: Joi.date().required(),
    text: Joi.string().required(),
  });
  return schema.validate(day);
}

router.get("/", async (req, res) => {
  res.send(await readData());
});

router.get("/:date", async (req, res) => {
  const data = await readData();
  const d = data.find((d) => d.date === req.params.date);
  if (d) {
    res.send(d);
  } else {
    res.status(404).send(`${req.params.date} not found`);
  }
});

router.post("/", async (req, res) => {
  const { error } = validateDay(req.body);
  if (error) {
    res.status(400).send(error.message);
    return;
  }

  const day = {
    date: req.body.date,
    text: req.body.text,
  };

  const data = await readData();
  const existingDay = data.find((d) => d.date === day.date);
  if (existingDay) {
    existingDay.text = `${existingDay.text} \n ${day.text}`;
  } else {
    data.push(day);
  }

  const w = await writeData(JSON.stringify(data));
  console.log(w);
  res.send(existingDay ?? day);
});

router.put("/:date", async (req, res) => {
  const { error } = validateDay(req.body);
  if (error) {
    res.status(400).send(error.message);
    return;
  }

  const data = await readData();

  res.send(req.body);

  // update
  // dayindb = req.body

  // res.send(dayInDb)
});

router.delete("/:date", async (req, res) => {
  const data = await readData();
  const day = data.find((d) => d.date === req.params.date);
  if (day) {
    const index = data.indexOf(day);
    if (index != -1) {
      data.splice(index, 1);
    }
    const w = await writeData(JSON.stringify(data));
    res.send(day);
  } else {
    res.status(404).send("date not found!");
  }
});

export default router;

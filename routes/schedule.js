import express from "express";
import Joi from "joi";
import { readData, writeData } from "../data/adapter.js";
import auth from "../middleware/auth.js";

const router = express.Router();

function validateDay(day) {
  const schema = Joi.object({
    date: Joi.date().required(),
    text: Joi.string().required(),
    username: Joi.string().required(),
  });
  return schema.validate(day);
}

const sortFunction = (a, b) => {
  if (a.date > b.date) {
    return 1;
  } else if (a.date < b.date) {
    return -1;
  } else {
    return 0;
  }
};

const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

router.get("/", async (req, res) => {
  const data = await readData();

  const sortedData = data.sort(sortFunction);

  const grouped = groupBy(sortedData, "date");
  res.send(grouped);
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

router.post("/", auth, async (req, res) => {
  const { error } = validateDay(req.body);
  if (error) {
    res.status(400).send(error.message);
    return;
  }

  const day = {
    id: Date.now().toString(),
    date: req.body.date,
    text: req.body.text,
    username: req.body.username,
  };

  const data = await readData();
  data.push(day);

  const w = await writeData(JSON.stringify(data));

  const sortedData = data.sort(sortFunction);
  const grouped = groupBy(sortedData, "date");
  res.send(grouped);
});

router.put("/", auth, async (req, res) => {
  try {
    const data = await readData();
    const note = data.find((note) => note.id === req.body.id);
    note.text = req.body.text;

    await writeData(JSON.stringify(data));

    res.send(note);
  } catch (e) {
    res.status(404).send("error in put request!");
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const data = await readData();
    const day = data.find((d) => d.id == req.params.id);
    if (!day) {
      console.log(req.params.id + " not found");
      // res.status(404).send("id not found!!!!!");
    } else {
      const index = data.indexOf(day);
      if (index != -1) {
        data.splice(index, 1);
      }
    }
    await writeData(JSON.stringify(data));

    const sortedData = data.sort(sortFunction);
    const grouped = groupBy(sortedData, "date");
    res.send(grouped);
  } catch (e) {
    console.log(e);
  }
});

export default router;

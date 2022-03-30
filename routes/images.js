import express from "express";
import glob from "glob";

const router = express.Router();

router.get("/", (req, res) => {
  glob("public/img/*.jpg", function (err, files) {
    if (err) {
      console.log(err);
      res.send("load images error");
    } else {
      res.send(files);
    }
  });
});

export default router;

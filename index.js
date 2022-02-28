import express from "express";
import scheduleRoutes from "./routes/schedule.js";
import usersRoutes from "./routes/users.js";
import auth from "./routes/auth.js";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/houseweb")
  .then(() => console.log("connected to db..."))
  .catch((err) => console.log("Could not connect to mongoDb..."));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/schedule", scheduleRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", auth);
app.use(helmet());
app.use(compression);

const port = process.env.PORT || 5000; // PORT or port?
app.listen(port, () => console.log(`listening on port ${port}`));

import express from "express";
import scheduleRoutes from "./routes/schedule.js";
import usersRoutes from "./routes/users.js";
import MessageRoutes from "./routes/messages.js";
import auth from "./routes/auth.js";
import register from "./routes/register.js";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import addSocketIO from "./socketServer/index.js";
import ImagesRoutes from "./routes/images.js";
import config from "config";

if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}

const mongodbUri = process.env.MONGODB_URI || config.get("mongodburi");

mongoose
  .connect(mongodbUri)
  .then(() => console.log("connected to db..."))
  .catch((err) => console.log(err));

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api/schedule", scheduleRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", auth);
app.use("/api/messages", MessageRoutes);
app.use("/api/images", ImagesRoutes);
app.use("/api/register", register);
app.use(helmet());
app.use(compression());

const httpServer = http.createServer(app);
const io = addSocketIO(httpServer);

const server = httpServer.listen(port, () => {
  const { port } = server.address();
  console.log("Listen on port " + port);
});

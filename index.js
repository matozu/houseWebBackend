import express from "express";
import logIn from "./middleware/logger.js";
import scheduleRoutes from "./routes/schedule.js";
import usersRoutes from "./routes/users.js";

const app = express();
// app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static("public"));

app.use(logIn);
app.use("/api/schedule", scheduleRoutes);
app.use("/api/users", usersRoutes);

const port = process.env.PORT || 5000; // PORT or port?
app.listen(port, () => console.log(`listening on port ${port}`));

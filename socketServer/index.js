import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import config from "config";
import { instrument } from "@socket.io/admin-ui";
import Message from "../data/message.js";

const middleware = (socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    next(new Error("Access denied. No token provided."));
  } else {
    try {
      const decoded = jwt.verify(
        token,
        config.get("jwtPrivateKey") ?? "privateKey"
      );
      socket.user = decoded;
      next();
    } catch (e) {
      next(new Error("Invalid token!"));
    }
  }
};

const addSocketIO = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: ["https://houseweb.herokuapp.com", "https://admin.socket.io"],
      methods: ["GET", "POST"],
    },
  });

  instrument(io, { auth: false });

  io.use(middleware);

  io.on("connection", async (socket) => {
    // io.sockets.sockets.forEach((s) => {
    //   console.log(s.user._username);
    // });

    // socket.on("disconnect", async () => {
    //   console.log(await io.allSockets());
    // });

    try {
      const messages = await Message.find({
        $or: [{ to: socket.user._username }, { from: socket.user._username }],
      }).sort({ date: 1 });
      socket.emit("messages", messages);
    } catch (e) {
      console.log(e);
    }

    socket.on("postMessage", async (postedMessage) => {
      let message = null;
      try {
        message = new Message({
          date: Date.now(),
          text: postedMessage.text,
          to: postedMessage.to,
          from: socket.user._username,
          read: false,
        });

        message = await message.save();
        console.log("message saved");
      } catch (e) {
        console.log(e);
      }

      io.sockets.sockets.forEach((s) => {
        if (s.user._username === postedMessage.to) {
          s.send(message);
          socket.send(message);
        }
      });
    });
  });

  return io;
};

export default addSocketIO;

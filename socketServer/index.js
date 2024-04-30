import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import config from "config";
import { instrument } from "@socket.io/admin-ui";
import Message from "../data/message.js";
import User from "../data/user.js";

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
  let connectedUsernames = [];
  const io = new Server(httpServer, {
    cors: {
      origin: [
        "http://localhost:5000",
        "http://localhost:3000",
        "https://housewebbackend.onrender.com",
        "https://admin.socket.io",
      ],
      methods: ["GET", "POST"],
    },
  });

  instrument(io, { auth: false });

  io.use(middleware);

  function log() {
    console.log("connected users: ");
    io.sockets.sockets.forEach((s) => console.log(s.user._username));
    console.log("-------------------------------------------------");
  }

  io.on("connection", async (socket) => {
    try {
      const messages = await Message.find({
        $or: [{ to: socket.user._username }, { from: socket.user._username }],
      }).sort({ date: 1 });

      const users = await User.find({
        username: { $ne: socket.user._username },
      }).sort({ username: 1 });

      if (!connectedUsernames.includes(socket.user._username)) {
        connectedUsernames.push(socket.user._username);
      }
      console.log("cu->" + connectedUsernames);

      const usersWithStatus = users.map((u) => {
        if (connectedUsernames.find((cu) => cu === u.username)) {
          return { id: u._id, username: u.username, isConnected: true };
        } else {
          return { id: u._id, username: u.username, isConnected: false };
        }
      });

      socket.emit("connected", { messages: messages, users: usersWithStatus });

      socket.broadcast.emit("newUserConnected", socket.user._username);

      console.log("----conection 4 " + socket.user._username + "-------");
      log();
    } catch (e) {
      console.log(e);
    }

    socket.on("disconnect", function () {
      console.log("--------disconnect 4 " + socket.user._username + "--------");
      log();
      connectedUsernames.splice(
        connectedUsernames.findIndex((u) => u === socket.user._username),
        1
      );
      console.log("cu->" + connectedUsernames);
      socket.broadcast.emit("disconnected", socket.user._username);
    });

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

        console.log(message);

        message = await message.save();
        socket.send(message);
      } catch (e) {
        console.log(e);
      }

      io.sockets.sockets.forEach((s) => {
        if (s.user._username === postedMessage.to) {
          s.send(message);
        }
      });
    });
  });

  return io;
};

export default addSocketIO;

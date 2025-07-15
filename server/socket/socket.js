const { Server } = require("socket.io");

let io;

const socketInit = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinQuestion", (questionId) => {
      socket.join(questionId);
    });

    socket.on("sendMessage", ({ questionId, message }) => {
      io.to(questionId).emit("receiveMessage", message);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};

module.exports = socketInit;

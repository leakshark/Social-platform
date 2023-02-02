const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { server } = require("socket.io");

app.use(cors());

const io = new Server(server,{
    cors: {
        origin:"http://localhost:3000",
        methods:["GET","POST"],
    },
});

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("diconnect", () => {
        console.log("user disconnected",socket.id);
    });
});

const server = http.createServer(app);

server.listen(3001, () => {
    console.log("SERVER RUNNING");
});

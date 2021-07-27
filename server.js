const express = require("express");

const server = express();

server.all("/", (request, response) => {
  response.send("Towelie bot is running!");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is running!");
  })
}

module.exports = keepAlive;
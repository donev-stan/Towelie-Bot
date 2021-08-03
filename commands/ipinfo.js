const fetch = require("node-fetch");

module.exports = {
  name: "ipinfo",
  cooldown: 180,
  description: "Towelie tells info by ip address.",
  execute (client, message, args) {
   message.channel.send("...in development...");
  }
}
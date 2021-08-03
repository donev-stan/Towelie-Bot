const fetch = require("node-fetch");

module.exports = {
  name: "ipconfig",
  description: "Towelie tells your ip address.",
  execute (client, message, args) {
    whatsMyIP().then(ip => message.reply(`Your ip address is ${ip}`));
  }
}

const api_url = `https://api.ipify.org?format=json`;

function whatsMyIP() {
  return fetch(api_url).then(response => response.json()).then(data => data.ip);
}
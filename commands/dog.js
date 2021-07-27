const fetch = require("node-fetch");

module.exports = {
  name: "dog",
  description: "Get a random dog image.",
  execute (client, message, args) {
    getDogImage().then(imageUrl => message.channel.send(imageUrl));
  }
}

const api_url = `https://dog.ceo/api/breeds/image/random`;

function getDogImage() {
  return fetch(api_url).then(response => response.json()).then(data => {
    if (data.status === "success") {
      return data.message;
    }
  });
}
const fetch = require("node-fetch");

module.exports = {
  name: "joke", 
  description: "Towelie tells a lame ass joke.",
  execute (client, message, args) {
     tellMeJoke().then(joke => {
        message.channel.send(joke.setup);
        setTimeout(() => {
          message.channel.send("...");
        }, 1500);

        setTimeout(() => {
          message.channel.send(joke.delivery)
        }, 3000);

      })
  }
}

const api_url = `https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart`;

function tellMeJoke() {
  return fetch(api_url).then(response => response.json()).then(joke => {
    if (!joke.error) return joke;
  });
}
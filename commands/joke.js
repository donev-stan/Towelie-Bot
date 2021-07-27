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
          message.channel.send(joke.punchline)
        }, 3000);

      })
  }
}

const api_url = `https://official-joke-api.appspot.com/random_joke`;

function tellMeJoke() {
  return fetch(api_url).then(response => response.json()).then(joke => joke);
}
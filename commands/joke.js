const fetch = require("node-fetch");

module.exports = {
  name: "joke", 
  cooldown: 3,
  description: "Towelie tells a lame ass joke.",
  execute (client, message, args) {
     tellMeJoke(args).then(joke => {
        message.channel.send(joke.setup);
        setTimeout(() => {
          message.channel.send("...");
        }, 1100);

        setTimeout(() => {
          message.channel.send(joke.delivery)
        }, 2100);

      })
  }
}

function tellMeJoke(args) {
  let category = 'Any';
  if (!args[0]) {
    category = 'Any';
  } else {
  if (args[0].toLowerCase() === 'programming') category = 'Programming';
  if (args[0].toLowerCase() === 'misc') category = 'Misc';
  if (args[0].toLowerCase() === 'dark') category = 'Dark';
  if (args[0].toLowerCase() === 'pun') category = 'Pun';
  if (args[0].toLowerCase() === 'spooky') category = 'Spooky';
  }

  return fetch(`https://v2.jokeapi.dev/joke/${category}?type=twopart`).then(response => response.json()).then(joke => {
    if (!joke.error) return joke;
  });
}
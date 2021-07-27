const fetch = require("node-fetch");

module.exports = (Discord, client, msg) => {
  const prefix = `!`;

  if (msg.author.bot) return;

  if (msg.content.startsWith(prefix)) {
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase(); 

    if (command === "ping") {
      client.commands.get("ping").execute(client, msg, args, Discord);
    }

  } else {
    // Dog Images
    if (msg.content === "dog") {
      getDogImage().then(imageUrl => msg.channel.send(imageUrl));
    }

    // Jokes
    if (msg.content === "joke") {
      tellMeJoke().then(data => {
        msg.channel.send(data.setup);
        setTimeout(() => {
          msg.channel.send("...");
        }, 1500);

        setTimeout(() => {
          msg.channel.send(data.punchline)
        }, 3000);

      })
    }

    // Default response
    if (msg.content === "hi towelie") {
      msg.reply("https://tenor.com/view/south-park-wann-get-high-towelie-gif-9114425");
    }
  }
}

// Get a dog image
function getDogImage() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(data => {
    if (data.status === "success") {
      return data.message;
    }
  });
}

// Tell me a joke
function tellMeJoke() {
  return fetch("https://official-joke-api.appspot.com/random_joke").then(response => response.json()).then(data => {
    return data;
  });
}
const fetch = require("node-fetch");

module.exports = (Discord, client, msg) => {
  const prefix = "!";

  if (msg.author.bot) return;

  if (msg.content.startsWith(prefix)) {
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase(); 

    if (command === "ping") {
      client.commands.get("ping").execute(client, msg, args, Discord);
    }

    if (command === "clear") {
      client.commands.get("clear").execute(client, msg, args, Discord);
    }

    if (command === "dog") {
      client.commands.get("dog").execute(client, msg, args, Discord);
    }

    if (command === "joke") {
      client.commands.get("joke").execute(client, msg, args, Discord);
    }

  } else {
    // Default response
    if (msg.content.trim().toLowerCase() === "hi towelie") {
      msg.reply("https://tenor.com/view/south-park-wann-get-high-towelie-gif-9114425");
    }
  }
}

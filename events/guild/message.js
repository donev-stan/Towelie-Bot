const fetch = require("node-fetch");

module.exports = (Discord, client, msg) => {
  const prefix = "!";

  if (msg.author.bot) return;

  if (msg.content.startsWith(prefix)) {
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase(); 

    if (command) {
      client.commands.get(`${command}`).execute(client, msg, args, Discord);
    }

  } else {
    if (msg.content.trim().toLowerCase() === "hi towelie") {
      const newEmbed = new Discord.MessageEmbed().setColor('#304281').setTitle('You wanna get high?').setURL('https://tenor.com/view/south-park-wann-get-high-towelie-gif-9114425').setImage('https://tenor.com/view/south-park-wann-get-high-towelie-gif-9114425');

      msg.channel.send(newEmbed);
      // msg.reply("https://tenor.com/view/south-park-wann-get-high-towelie-gif-9114425");
    }

    if (msg.content.trim().toLowerCase().split(" ").includes("high")) {
      msg.reply("https://tenor.com/view/dont-forget-to-bring-a-towel-towelie-south-park-take-a-towel-dont-forget-gif-22089251");
    }
  }
}

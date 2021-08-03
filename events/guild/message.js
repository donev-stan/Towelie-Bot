const cooldowns = new Map();

module.exports = (Discord, client, msg) => {
  const prefix = "!";
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase(); 

  const command = (client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd)));

  

  try {
    // if (command) command.execute(client, msg, args, Discord);
    // command.execute(msg, args, cmd, client, Discord);
    command.execute(client, msg, args, Discord);
  } catch (error) {
    msg.channel.send('https://tenor.com/view/south-park-towelie-no-idea-gif-15446391');
    console.log(error);
  }
}

const cooldowns = new Map();

module.exports = (Discord, client, msg) => {
  const prefix = "!";
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase(); 

  const command = (client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd)));

  

  try {

    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if (time_stamps.has(msg.author.id)) {
      const expiration_time = time_stamps.get(msg.author.id) + cooldown_amount;

      if (current_time < expiration_time) {
        const time_left = (expiration_time - current_time) / 1000;
        return msg.reply(`You gotta wait ${time_left.toFixed(1)} more seconds before using ${command.name}`);
      }
    }

    time_stamps.set(msg.author.id, current_time);

    setTimeout(() => time_stamps.delete(msg.author.id), cooldown_amount);

    // if (command) command.execute(client, msg, args, Discord);
    // command.execute(msg, args, cmd, client, Discord);
    command.execute(client, msg, args, Discord);

  } catch (error) {
    msg.channel.send('https://tenor.com/view/south-park-towelie-no-idea-gif-15446391');
    console.log(error);
  }
}

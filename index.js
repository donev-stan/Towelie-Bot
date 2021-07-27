const Discord = require("discord.js");
const keepAlive = require("./server");

// const Database = require("@replit/database");
// const db = new Database();
// To be continued...

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
})

keepAlive();
client.login(process.env['TOKEN']);
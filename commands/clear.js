module.exports = {
  name: 'clear',
  description: 'Clear messages!',
  async execute (client, message, args, Discord) {
    if (!args[0]) return message.reply("Enter the amount of messages that you want to clear, duh!");

    if (isNaN(args[0])) return message.reply("Enter a number, asshole!");

    if (args[0] < 1) return message.reply("You must delete at least ONE message, dumbass!");

    await message.channel.messages.fetch({limit: args[0]}).then(messages => {
      message.channel.bulkDelete(messages);
    })
  }
};
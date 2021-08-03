module.exports = {
  name: 'clear',
  description: 'Clear messages!',
  async execute (client, message, args, Discord) {

    const numberOfMessages = args; 
    if (!numberOfMessages) return message.reply("Enter the amount of messages that you want to clear, duh!");

    if (isNaN(numberOfMessages)) return message.reply("Enter a number, asshole!");

    if (numberOfMessages < 1) return message.reply("You must delete at least ONE message, dumbass!");

    await message.channel.messages.fetch({limit: numberOfMessages}).then(messages => {
      message.channel.bulkDelete(messages);
    })
  }
};
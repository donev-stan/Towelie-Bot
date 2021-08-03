const fetch = require("node-fetch");

module.exports = {
  name: "cat",
  description: "Towelie tells a random fact about cats.",
  execute (client, message, args, Discord) {
    getCatFact().then(fact => {


    const catEmbed = new Discord.MessageEmbed().setColor('#304281').setTitle('Cat Fact').setURL('https://cataas.com/cat').setDescription(`${fact}`)
    .setImage('https://cataas.com/cat');

      message.reply(catEmbed);

    });
  }
}

const api_url = `https://catfact.ninja/fact`;

function getCatFact() {
  return fetch(api_url).then(response => response.json()).then(data => data.fact);
}
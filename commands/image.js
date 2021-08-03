const Scraper = require('images-scraper');

const google = new Scraper({
  puppeteer: {
    headless: false,
  },
});

module.exports = {
  name: 'image',
  description: 'Towelie searches for images on Google.',
  async execute (client, message, args) {
    const image_query = args.join(' ');
    if (!image_query) return message.reply('Type what are you searching for, dumbass!');

    const image_results = await google.scrape(image_query, 1);
    message.channel.send(image_results[0].url);
  }
};
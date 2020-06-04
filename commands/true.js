const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
  name: "true",
  description: "true",
  execute(message) {
    message.delete({ timeout: 1, reason: 'It had to be done.' });
let user = message.mentions.users.first();
message.channel.send("O barradas é GAY!");

  }
}
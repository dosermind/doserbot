const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Show your discord avatar as PM",
  execute(message) {
    message.reply(message.author.displayAvatarURL());
  }
};

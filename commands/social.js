const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "social",
  description: "Display all my social media",
  execute(message) {
    let helpEmbed = new MessageEmbed()
      .setColor("#F8AA2A")
      .setTitle("Social Media")
      .setAuthor("Doser")
      .setDescription("List of all my social media")
      .setThumbnail(
        "https://avatars0.githubusercontent.com/u/39463084?s=460&u=2632148ad08bfbaa0dabdb096ecf07d429e8ea54&v=4"
      )
      .addFields(
        { name: "Twitch", value: "https://www.twitch.tv/dosermind" },
        { name: "Instagram", value: "https://www.instagram.com/daniel.adriao" },
        { name: "GitHub", value: "https://github.com/dosermind/" }
      )
      .setTimestamp()
      .setFooter(
        "By: Doser",
        "https://avatars0.githubusercontent.com/u/39463084?s=460&u=2632148ad08bfbaa0dabdb096ecf07d429e8ea54&v=4"
      );

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed);
  }
};

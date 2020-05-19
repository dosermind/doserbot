const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Display all commands and descriptions",
  execute(message) {
    const discord = require("discord.js");
    const client = new discord.Client();
    const user = client.users.cache.get("id");
    const channel = client.channels.cache.get("id");

    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setColor("#F8AA2A")
      .setTitle("Help Me")
      .setAuthor("Doser")
      .setDescription("List of all commands")
      .setThumbnail(
        "https://avatars0.githubusercontent.com/u/39463084?s=460&u=2632148ad08bfbaa0dabdb096ecf07d429e8ea54&v=4"
      )
      .setTimestamp()
      .setFooter(
        "By: Doser",
        "https://avatars0.githubusercontent.com/u/39463084?s=460&u=2632148ad08bfbaa0dabdb096ecf07d429e8ea54&v=4"
      );

    commands.forEach(cmd => {
      helpEmbed.addField(
        `${message.client.prefix}${cmd.name}`,
        `${cmd.description}`
      );
    });

    helpEmbed.setTimestamp();

    return message.author.send(helpEmbed);
  }
};

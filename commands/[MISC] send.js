const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '.';

module.exports = {
  name: "send",
  description: "Send message to mentioned user",
  execute(message) {
    message.delete();
    let args = message.content.substring(PREFIX).split(" ");
    let member = message.mentions.members.first();
    //if (message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
    //{
      if(!member)
        return message.reply("Please mention a valid member of this server");
    let reason = args.slice(2).join(' ');
      if(!reason)
          return message.reply("Please write a message.");
    member.send(`${reason}`);
    message.author.send(`${member.user.tag} received a message "${reason}" sent by: you`);
    console.log(`${member.user.tag} received a message "${reason}" sent by:${message.author.tag}`);
    //}
    //else
    //message.reply("You don't have permission to use (.send) ");
}
}

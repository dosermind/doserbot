const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '.';
 
module.exports = {
  name: "sendall",
  description: "send a message to all users",
  execute(message){
    let args = message.content.substring(PREFIX).split(" ");
    message.delete();
    //if (message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
    //{
    if (!args[1]) return message.reply('Especifica a tua mensageml!');
       let text = message.content.slice('.sendall'.length); 
       message.guild.members.cache.forEach(member => {
        process.on('unhandledRejection', error => {
          //console.error(' ');
        });
        member.send(text)
    });
    console.log(`${message.author.tag} sent ${text} to everyone`);
  //}
  //else
  //message.reply("You don't have permission to use (.sendall) ");
}
}

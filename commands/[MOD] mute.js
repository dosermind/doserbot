const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '.';

module.exports = {
  name: "mute",
  description: "mute user",

    execute(message){
      let args = message.content.substring(PREFIX).split(" ");
      let mutee = message.mentions.members.first();
      if(!mutee) return message.channel.send("Please supply a user to be muted!");
      let reason = args.slice(1).join(" ");
      if(!reason) reason = "No reason given"
      let muterole = message.guild.roles.cache.find(r => r.name === "Muted");
      if(!muterole) {
        
            muterole = message.guild.roles.create({
            data: {   
              name: "Muted",
                color: "#514f48",
                permissions: []
              },
            })
            message.guild.channels.cache.forEach((channel)=>{
              console.log("ola adeus")
            })
        
    }
    mutee.roles.add(muterole.id).then(() => {
      message.delete()
      mutee.send(`Hello, you have been in ${message.guild.name} for: ${reason}`).catch(err => console.log(err))
      message.channel.send(`${mutee.user.username} was successfully muted.`)
  })
    }
}



module.exports = {
  name: "invite",
  description: "invite",
  execute(message) {
    const discord = require("discord.js");
    const client = new discord.Client();
    const user = client.users.cache.get("id");
    const channel = client.channels.cache.get("id");
    return message.author.send(
      "JOIN https://discord.gg/UFbVtWF and PM @doser#4935"
    );

    //return message.channel.send("Why is the bot english?\n - Cuz I want to \n Is the bot open source?\n - Yes, As soon as I finish developing the bot, it will be available on github");
  }
};

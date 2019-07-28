const fs = require("fs")


module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('No.');

        let toKick = message.guild.member(message.mentions.users.first());
        if (!toKick) return message.channel.send("You need a user boi!");

        if (toKick.id === message.author.id) return message.channel.send("No self-kicks");
        if(toKick.highestRole.position >= message.member.highestRole.position) return ("That person is better than You")


        guild.kick(toKick)
        message.channel.send("I have kicked them");
   };

module.exports.help = {
  name: "kick"
}

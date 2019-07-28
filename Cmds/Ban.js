const fs = require("fs")


module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('No.');

        let toBan = message.guild.member(message.mentions.users.first());
        if (!toBan) return message.channel.send("You need a user boi!");

        if (toBan.id === message.author.id) return message.channel.send("No self-bans");
        if(toBan.highestRole.position >= message.member.highestRole.position) return ("That person is better than You")


        guild.ban(toBan)
        message.channel.send("I have banned them");
   };

module.exports.help = {
  name: "ban"
}

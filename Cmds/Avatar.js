const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

	const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.RichEmbed()
        .setColor(0x333333)
        .setAuthor(`${user.username}'s avatar`)
        .setImage(user.avatarURL);
    message.channel.send(avatarEmbed);
}

module.exports.help = {
  name: "avatar"
}

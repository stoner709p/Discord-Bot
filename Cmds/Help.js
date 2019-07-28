const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
		let embed = new Discord.RichEmbed()
            .setAuthor('Made by Albert Einstein#0001')
            .setDescription("Current Commands")
            .setColor("#ffffff")
            .addField("1.", `Mute/Unmute`)
            .addField("2.", 'Ban')
            .addField("3", 'Kick')
            .addField('4', 'Avatar')
            .addField('5', 'Userinfo')
            .addField('6', 'Purge')


        message.channel.sendEmbed(embed);

}

module.exports.help = {
  name: "help"
}

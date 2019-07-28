const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.users.first() || message.author;
      let embed = new Discord.RichEmbed()
        .setAuthor(user.username)
        .setDescription("User's info")
        .setColor("#ffffff")
        .addField("Full Username", `${user.username}#${user.discriminator}`)
        .addField("ID", user.id)
        .addField("Created At",user.createdAt)

  message.channel.send(embed);
}

    
  

module.exports.help = {
  name: "userinfo"
}

const fs = require("fs")


module.exports.run = async (bot, message, args) => {
	
	const r = Math.random().toString(36).substring(7);
    const user = message.mentions.users.first();
	if(!user){return(message.channel.send("You need a person to hack!")}
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        message.reply("Username: " + (user) + " Password: " + r)
		}
	}
};

        

module.exports.help = {
  name: "hack"
}

const fs = require("fs")


module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('No.');

        let toMute = message.guild.member(message.mentions.users.first());
        if (!toMute) return message.channel.send("You need a user boi!");

        if (toMute.id === message.author.id) return message.channel.send("No self-mutes");
        if(toMute.highestRole.position >= message.member.highestRole.position) return ("That person is better than You")

        let role = message.guild.roles.find(r => r.name === "Smart Mute");
        if (!role) {
            try {
                role = await message.guild.createRole({
                    name: "Smart Mute",
                    permissions: []
                });

                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                })
            } catch (e) {
                console.log(e.stack);
            }

        }
        if (toMute.roles.has(role.id)) return message.channel.send("They already got muted");

		bot.mutes[toMute.id] = {
			guild: message.guild.id,
			time: Date.now() + parseInt(args[1]) * 1000
		}

		fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null, 4), err => {
			if(err) throw err;
			
		})

        await toMute.addRole(role);
        message.channel.send("I have muted them");
   };

module.exports.help = {
  name: "mute"
}

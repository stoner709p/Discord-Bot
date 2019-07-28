module.exports.run = async (bot, message, args) => {
	 if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('No.');

        let toMute = message.guild.member(message.mentions.users.first());
        if (!toMute) return message.channel.sendMessage("You need a user boi!");

        let role = message.guild.roles.find(r => r.name === "Smart Mute");
       
        if (!role ||  !toMute.roles.has(role.id)) return message.channel.sendMessage("They are not muted");

        await toMute.removeRole(role);
        message.channel.sendMessage("I have unmuted them");
   };

module.exports.help = {
  name: "unmute"
}

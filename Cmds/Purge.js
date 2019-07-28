const fs = require("fs")


module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('No.');
	const amount = parseInt(message.content.split(' ')[1]);
	message.channel.bulkDelete(amount)
    .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
    .catch(console.error);
}

        

module.exports.help = {
  name: "purge"
}

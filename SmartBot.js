const botSettings = require("./botsettings.json");
const Discord = require('discord.js');
const prefix = botSettings.prefix
const fs = require("fs");

const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.mutes = require("./mutes.json");

fs.readdir("./Cmds/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if (jsfiles.length <= 0) {
    console.log("No commands idiot");
    return;
  }
  console.log(`Loading ${jsfiles.length} commands`);

  jsfiles.forEach((f, i) => {
      let props = require(`./Cmds/${f}`);
      console.log(`${i + 1}`);
      bot.commands.set(props.help.name, props);

  });
});




bot.on("ready", async () => {
    console.log(`Bot has restarted!`);
    console.log(bot.commands);
});

bot.on("message", async message => {
    if (message.author.bot) return;
    const author = message.author.username
    console.log( (message.guild.name) + (':') + (author) + (":") + (message.content))
});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let content = message.content
    let messageArray = message.content.split(" ");
    let command = messageArray[0]
    let args = messageArray.slice(1)

    if (!command.startsWith(prefix)) return;
    
    let cmd = bot.commands.get(command.slice(prefix.length))
    if(cmd) cmd.run(bot, message, args)
});




bot.login(botSettings.token);
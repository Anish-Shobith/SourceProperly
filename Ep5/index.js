const { prefix, token } = require("./config.json");
const { Client, RichEmbed } = require("discord.js");

const bot = new Client({
    disableEveryone: true
});

bot.on("ready", () => {
    console.log(`${bot.user.username} is now online!`);
    bot.user.setActivity("proper code", {
        type: "WATCHING"
    });
});

bot.on("message", async message => {
    if (message.author.bot || message.channel.type == "dm") return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix)) return;

    let commandfile = bot.commands.get(cmd);
    if (commandfile) commandfile.run(bot, message, args);
});

bot.login(token)
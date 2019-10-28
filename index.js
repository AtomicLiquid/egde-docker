const Discord = require("discord.js");
require('dotenv').config();
const token = process.env.token;
const bot = new Discord.Client();

bot.once("ready", () => {
    console.log("Bot is ready")
})

bot.on("message", async message => {
    if(message.content === "!ping") {
        message.channel.send("Pong!");
    }
})

bot.login(token);
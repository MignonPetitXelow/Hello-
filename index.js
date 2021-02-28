const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const command = require('./Commands/command.js')

client.once('ready', () => {
   console.log('[INFO] TurtleBot has started');
   client.user.setActivity("Hello! 💥")

   command(client, 'pressbutton', (message) => {message.channel.send("Hello! 💥")})
});
client.login(config.BOT_TOKEN);

client.on("message", message => {
    switch (message.content)
    {
        case 'Hey':
            if(message.author.bot) return;
            message.channel.send("Hello! 💥")
            break;
        case 'Hello':
            if(message.author.bot) return;
            message.channel.send("Hello! 💥")
            break;    
        case 'Hi':
            if(message.author.bot) return;
            message.channel.send("Hello! 💥")
            break;
        case 'Salut':
            if(message.author.bot) return;
            message.channel.send("Hello! 💥")
            break;
        case 'Bonjour':
            if(message.author.bot) return;
            message.channel.send("Hello! 💥")
            break;
        case 'Bonsoir':
            if(message.author.bot) return;
            message.channel.send("Hello! 💥")
            break;
}})



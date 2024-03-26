
const Discord = require('discord.js');
const client = new Discord.Client({intents:["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]});
const config = require("./config.json");
const fs = require('fs')
const prefix = config.prefix;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once("ready", () => {
    console.log(`Přihlásil jsem se za: ${client.user.tag}`)
    // client.user.setActivity("📌")
});


client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split('/ +/');
    const command = args.shift().toLowerCase();

    if(command === 'test'){
        client.commands.get('test').execute(message, args)
    } else if (command === 'pravidla'){
        client.commands.get('pravidla').execute(message, args)
    } else if (command === ''){
        client.commands.get('').execute(message, args)
    } else if (command === ''){
        client.commands.get('').execute(message, args)
    } else if (command === ''){
        client.commands.get('').execute(message, args)
    } else if (command === ''){
        client.commands.get('').execute(message, args)
    }
})

client.login(config.token);
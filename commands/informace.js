const Discord = require('discord.js');
module.exports = {
    name: 'informace',
    description: 'this is a ping command',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
            .setTitle('🎮 • Informace - Apexis Esport ')
            .setColor('RED')
            .setDescription(
                `\n ` +
                `\n** **` +
                `\n __ __` +
                `\n ⌇⌇ ` +
                `\n ⌇⌇ ` +
                `\n ⌇⌇ ` +
                `\n ⌇⌇ ` +
                `\n ➔ ` +
                `\n ` 
                )
        
        console.log("> Command usage: Command Informace has been used.");
        message.channel.send({embeds:[embed]});
        // message.channel.send("https://discord.gg/R94uDaBH");
        message.delete();
        


    }
}
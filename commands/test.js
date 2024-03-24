const Discord = require('discord.js');
module.exports = {
    name: 'test',
    description: 'this is a ping command',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
            .setTitle('Test')
            .setColor('RED')
            .setDescription('Test')
            .setFooter('test')
            
        message.channel.send({embeds:[embed]})


    }
}
const Discord = require('discord.js');
module.exports = {
    name: 'pravidla',
    description: 'this is a ping command',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
            .setTitle('🎮 • Pravidla Apexis Esport ')
            .setColor('RED')
            .setDescription(
                `\n ` +
                `\n Používáním tohoto serveru berete na vědomí a přijímáte následující pravidla;` +
                `\n ` +
                `\n**Poslouchejte Discord & Steam ToS**` +
                `\n __To zahrnuje, ale není omezeno k:__` +
                `\n ⌇⌇ Nezveřejňujte NSFW, diskriminační, krvavý nebo urážlivý obsah.` +
                `\n ⌇⌇ Nemluvte o nelegálních tématech nebo tématech starších 18 let, jako jsou: drogy, cheaty, hazard,...` +
                `\n ⌇⌇ Nepokoušejte se nikoho podvádět.` +
                `\n ⌇⌇ Přečtěte si a dodržujte pravidla Discord` +
                `\n ➔ https://discord.com/guidelines` +
                `\n ` +
                `\n**Respektujte a poslouchejte vlastníky**` +
                `\n __Dali tvrdou práci, aby se tento server stal příjemným místem pro každého!__` +
                `\n ⌇⌇ Chovejte se k vlastníků a členům tak, jak byste chtěli, aby se oni chovali k vám.` +
                `\n ⌇⌇ Nehádejte se o moderování v chatech nebo DM.` +
                `\n ⌇⌇ Pokud máte stížnost, zašlete ji na @Zakladatel týmu` +
                `\n ⌇⌇ Rozhodnutí učiněná superadministrátory jsou konečná a nelze o nich vyjednávat.` +
                `\n ` +
                `\n**Nerespektujte ostatní členy**` +
                `\n __To zahrnuje, ale není omezeno na:__` +
                `\n ⌇⌇ Záměrně nikoho neobtěžujte.` +
                `\n ⌇⌇ Žádná toxicita není povolena.` +
                `\n ⌇⌇ Bezdůvodně nezmiňujte lidi.` +
                `\n ` +
                `\n**Používejte server pro zamýšlený účel**` +
                `\n __To zahrnuje, ale není omezeno na:__` +
                `\n ⌇⌇ Nesnažte se vyvolávat hádky kvůli kontroverzním tématům.` +
                `\n ⌇⌇ Neposílejte spam ani podezřelé zprávy.` +
                `\n ⌇⌇ Používejte každý kanál pro svůj vlastní účel.` +
                `\n ⌇⌇ Nežádejte o věci zdarma.` +
                `\n ⌇⌇ Komunikujte normálním jazykem.` +
                `\n ` +
                `\n**Totéž platí pro hlasové kanály**` +
                `\n __To zahrnuje, ale není omezeno na:__` +
                `\n ⌇⌇ Všechna pravidla serveru platí i pro hlasové chaty.` +
                `\n ⌇⌇ Nevytvářejte nežádoucí zvuky.` +
                `\n (znásilnění v uších, hlasité zvuky na pozadí, silné měniče hlasu atd.)` +
                `\n ⌇⌇ Nestreamujte nevhodný obsah.` +
                `\n (drogy, hazardní hry, skutečné střelné zbraně, filmy chráněné autorským právem, cheaty, nahota atd..)` +
                `\n ` +
                `\n **Nepokoušejte se nic kupovat nebo prodávat.**` +                
                `\n ➔ Přečtěte si před zahájením jakéhokoli obchodování.` +
                `\n ` +
                `\n **Další informace**` +
                `\n ⌇⌇ Tato pravidla platí také pro profily členů, a pokud se obě strany nedohodnou jinak, i pro soukromé zprávy.` +
                `\n ` 
                )
            
        message.channel.send({embeds:[embed]});
        message.channel.send("https://discord.gg/R94uDaBH");
        message.delete();


    }
}
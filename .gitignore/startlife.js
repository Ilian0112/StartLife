// Module
const Discord = require(`discord.js`);
//

// New Client ( les deux pour pas ce prendre la tête )
const client = new Discord.Client();
const bot = new Discord.Client();
//

// Bot Info
const version = `V.0.0.1`
const PREFIX = `:`
const botname = `StartLife`
//

// Quand le BOT est start
bot.on(`ready`, function () {
    console.log(`${botname} connectée !`);
    bot.user.setActivity(`[${PREFIX}] ${botname}`)
    bot.user.setUsername(`${botname}`)
   // bot.user.setAvatar(`https://cdn.discordapp.com/icons/318461080852627457/3eb807eef4d12a5a9c4cfcfd2fc1fab5.webp?`)
})
//

// Le code 
bot.on(`message`, async function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split (` `);
  
    var args2 = message.content.split(` `).slice(1);

    var suffix = args2.join(` `);

    var reason = args2.slice(1).join(` `);
    
    var reasontimed = args2.slice(2).join(' ')

    var user = message.mentions.users.first();
    
    var guild = message.guild;
    
    var member = message.member;
    
    var roleMute = member.guild.roles.find(`name`, `Mute`)

    var foother = `Commande effectué par @` + message.author.username + `#` + message.author.discriminator + ` ! | ${botname} - ` + version
    
    var modlog = member.guild.channels.find(`name`, `logs`)


       
// Les commandes
    switch (args[0].toLowerCase()) {
        case `annonce`:
            message.delete()

            if (message.author.id === `193092758267887616` && `283283041919565836`) {
                let annonce = message.content.split(` `);
                annonce.shift();

                var annonce_embed = new Discord.RichEmbed()
                .addField(`Annonce!`, `${annonce.join(` `)}`)
                .setColor(`#FF0000`)
                .setTimestamp()
                .setFooter(foother)

                message.channel.send(annonce_embed)
            }
        break;

    }
});

bot.login(`${process.env.TOKEN}`);

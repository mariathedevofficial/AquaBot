module.exports = {
    name: "unlock",
    category: "moderation",
    description: "unlocks the locked channel",
    ownerOnly: false,
    aliases: ["unlock-channel"],
    run: async(bot, message, args) => {
        let permission = message.member.permissions.has("MANAGE_CHANNELS");
        if(!permission) {
            bot.embed.setTitle("Missing Permissions")
            embed.setColor("RED")
            embed.setDescription(`${bot.emoji.error} You do not have the required permissions to use this command. You need \`MANAGE_CHANNELS\` permission`)
            embed.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({format: "png", dynamic: true, size: 2048}))

            return message.reply({embeds: [embed]})
        }

        if(message.channel.permissionOverwrites.set([{
            id: message.guild.id,
            allow: ['SEND_MESSAGES']
          }])) { 
              bot.embed.setDescription(`${bot.emoji.success} The channel has been unlocked.`)
              .setColor("BLUE")
              .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({format: "png", dynamic: true, size: 2048}))
              return message.reply({embeds: [bot.embed]})
          }
    }
}
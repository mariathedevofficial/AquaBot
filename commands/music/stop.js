const discord = require("discord.js")
const embed = new discord.MessageEmbed()

module.exports = {
    name: "stop",
    description: "Cleares the queue",
    category: "music",
    aliases: ["leave", "disconnect"],
    run: async(bot, message, args) => {
        let voiceChannel = message.member.voice.channel;
        let player = bot.music.players.get(message.guild.id);

        if(!voiceChannel) {
            embed.setDescription("You need to be in a voice channel to use the stop command.")
            embed.setColor("BLUE")
            embed.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({format: "png", dynamic: true, size: 2048}))

            return message.reply({embeds: [embed]})
        }

        if(!player) {
            embed.setDescription("There is no song/s playing within this guild.")
            embed.setColor("BLUE")
            embed.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({format: "png", dynamic: true, size: 2048}))
            return message.reply({embeds: [embed]})
        }
         
        if(player.voiceChannel !== voiceChannel.id) {
            embed.setDescription("I'm being used in another voice channel.")
            embed.setColor("BLUE")
            embed.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({format: "png", dynamic: true, size: 2048}))
            return message.reply({embeds: [embed]})
        }

        if(!player) {
            embed.setDescription("There is no song/s playing within this guild.")
            embed.setColor("BLUE")
            embed.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({format: "png", dynamic: true, size: 2048}))
            return message.reply({embeds: [embed]})
        }

        player.destroy();
        embed.setDescription("The queue has been cleared and I left the voice channel.")
        embed.setColor("BLUE")
        embed.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({format: "png", dynamic: true, size: 2048}))
        message.reply({embeds: [embed]})
    }
}
const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require('discord.js');
const { MessageEmbed, WebhookClient} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('docs')
        .setDescription('Minehut skript documents'),
    async execute(interaction) {
        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Skript Documentation')
            .setDescription('Skript documentation, sometimes referred to as "the docs" are a great resource for beginners learning skript or experts reviewing a topic. They hold a wide variety of information on various events, conditions, effects, and expressions. Heres a few popular documentation websites: \n \n [• Skript Lang Github](https://docs.skriptlang.org/index.html) \n[• Skript Lang Github](https://docs.skriptlang.org/index.html) \n[• Skript Hub Docs](https://skripthub.net/docs/) \n [• SkUnity Docs](https://docs.skunity.com/syntax/) \n[• Bukkit Dev](https://dev.bukkit.org/projects/skript) \n[• skUnity Parser](https://parser.skunity.com/) - Another Great tool is the skunity parser, whitch can parse (run) your skript code in a web broswer and check for errors')
            .setFooter({text: `Requested by ${interaction.member.user.tag}`, iconURL: interaction.member.displayAvatarURL()})
            .setTimestamp()
        await interaction.reply({ embeds: [exampleEmbed] });
    }
}
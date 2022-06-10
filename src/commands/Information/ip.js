const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require('discord.js');
const { MessageEmbed, WebhookClient} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ip')
        .setDescription('Minehut server ip'),
    async execute(interaction) {
        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Server Ports')
            .setDescription('Minehut servers are always hosted on the default port.')
            .addField('Java Edition: ', 'minehut.com:`25565`', true)
            .addField('Bedrock Edition: ', 'minehut.com:`19132`', true)
            .setFooter({text: `Requested by ${interaction.member.user.tag}`, iconURL: interaction.member.displayAvatarURL()})
            .setTimestamp()
        await interaction.reply({ embeds: [exampleEmbed] });
    }
}
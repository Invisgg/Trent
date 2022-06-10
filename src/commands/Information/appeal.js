const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require('discord.js');
const { MessageEmbed, WebhookClient} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('appeal')
        .setDescription('Appeal a punishment'),
    async execute(interaction) {
        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Appeal a Punishment or Suspension')
            .setDescription('Been unfairly punished or has your server been suspended? [Appeal by submitting a support ticket.](https://minehut.com/support/form) \n \n Most appeals will be responded to within 24 hours, so please dont pester staff about your appeal. Server appeals may take longer as we need to investigate before taking action. ')
            .setFooter({text: `Requested by ${interaction.member.user.tag}`, iconURL: interaction.member.displayAvatarURL()})
            .setTimestamp()
        await interaction.reply({ embeds: [exampleEmbed] });
    }
}
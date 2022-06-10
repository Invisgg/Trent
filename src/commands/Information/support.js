const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require('discord.js');
const { MessageEmbed, WebhookClient} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Support Tickets'),
    async execute(interaction) {
        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff') // https://minehut.zendesk.com/hc/en-us
            .setTitle('Appeal a Punishment or Suspension')
            .setDescription('If you would like to submit a support ticket then head over to the [support form](https://minehut.com/support/form) or \n email support at `support@minehut.com`.\n \n • Additionally you can view the  [Support FAQ](https://minehut.zendesk.com/hc/en-us)')
            .setFooter({text: `Requested by ${interaction.member.user.tag}`, iconURL: interaction.member.displayAvatarURL()})
            .setTimestamp()
        await interaction.reply({ embeds: [exampleEmbed] });
    }
}
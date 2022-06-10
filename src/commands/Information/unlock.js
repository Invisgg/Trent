const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require('discord.js');
const { MessageEmbed, WebhookClient} = require('discord.js');
const { Permissions} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unlock')
        .setDescription('Unlocks the channel'),
    async execute(interaction) {
        if (interaction.member.permissions.has(`MANAGE_CHANNELS`)) {
            await interaction.reply({ content: "Executed in 0ms", ephemeral: true})
            const exampleEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Channel Unlocked')
                .addField('Channel:', '<#' + interaction.channel + '>', true)
                .addField('Executor:', '<@' + interaction.member + '>', true)
                .addField('Status:', 'Unlocked', true)
                .setTimestamp()
            const channel = await interaction.channel
            await channel.send({embeds: [exampleEmbed], ephemeral: false})
            await channel.permissionOverwrites.edit(interaction.guild.id, { SEND_MESSAGES: true });
        } else {
            await interaction.reply({ content: "You do not have permission to use this command!", ephemeral: true})
        }
    }
}
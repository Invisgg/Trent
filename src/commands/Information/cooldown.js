const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require('discord.js');
const { MessageEmbed, WebhookClient} = require('discord.js');
const { Permissions} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('slowmode')
        .setDescription('adds a cooldown to the server')
        .addStringOption(option => option
            .setName("time")
            .setRequired(true)
            .setDescription("How long in seconds you want the cooldown to be")),    
    async execute(interaction) {
        if (interaction.member.permissions.has(`MANAGE_CHANNELS`)) {
            await interaction.reply({ content: "Executed in 0ms", ephemeral: true})
            const exampleEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Channel Slowmode')
                .addField('Channel:', '<#' + interaction.channel + '>', true)
                .addField('Executor:', '<@' + interaction.member + '>', true)
                .addField('Status:', interaction.options.getString('time') + " (s)", true)
                .setTimestamp()
            const time = interaction.options.getString('time')
            const channel = await interaction.channel
            await channel.send({embeds: [exampleEmbed], ephemeral: false})
            await channel.setRateLimitPerUser(time);
        } else {
            await interaction.reply({ content: "You do not have permission to use this command!", ephemeral: true})
        }
    }
}
const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require('discord.js');
const { MessageEmbed, WebhookClient} = require('discord.js');
const { Permissions} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clearchat')
        .setDescription('Wipes the event chat.'),
    async execute(interaction) {
        if (interaction.member.permissions.has(`MANAGE_CHANNELS`)) {
            const newChnl = await interaction.channel.clone();
            await interaction.channel.delete();
            const exampleEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Clear Chat')
                .setDescription('Beginning of a new discord channel!')
                .addField('Executor:', '<@' + interaction.member + '>', true)
                .addField('Channel:', '<#' +  newChnl + '>', true)
                .setTimestamp()
            await newChnl.send({ embeds: [exampleEmbed] });
        } else {
            await interaction.reply({ content: "You do not have permission to use this command!", ephemeral: true})
        }
    }
}
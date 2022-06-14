const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require('discord.js');
const ms = require('ms')
const { MessageEmbed, WebhookClient} = require('discord.js');
const { Permissions} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Wipes the event chat.')
        .addStringOption(option => option
            .setName("amount")
            .setRequired(true)
            .setDescription("Amount of messages that you're purging")),    
    async execute(interaction) {
        if (interaction.member.permissions.has(`MANAGE_CHANNELS`)) {
            let amount = interaction.options.getString('amount') || 1;
            let messages = await interaction.channel.messages.fetch({
                limit: amount,
            })
            let filtered = messages.filter((msg) => Date.now() - msg.createdTimestamp < ms('14 days'))
            await interaction.channel.bulkDelete(filtered)
            const exampleEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Purge')
                .setDescription(`${interaction.options.getString('amount')} messages purged`)
                .addField('Executor:', '<@' + interaction.member + '>', true)
                .addField('Channel:', '<#' +  interaction.channel + '>', true)
                .setTimestamp()
            await interaction.reply({ embeds: [exampleEmbed] });
        } else {
            await interaction.reply({ content: "You do not have permission to use this command!", ephemeral: true})
        }
    }
}

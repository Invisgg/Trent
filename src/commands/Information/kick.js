const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require('discord.js');
const { MessageEmbed, WebhookClient} = require('discord.js');
const { Permissions} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a player')
        .addUserOption(option => option
            .setName("target")
            .setRequired(true)
            .setDescription("Player you want to punish"))
        .addStringOption(option => option
            .setName("reason")
            .setRequired(true)
            .setDescription("Reason for the punishment")),
    async execute(interaction) {
        if (interaction.member.permissions.has(`KICK_MEMBERS`)) {
            const Target = await interaction.options.getMember('target')
            const reason = await interaction.options.getString('reason')
            if(!Target) return await interaction.reply(`User not found!`);
            if(!Target.kickable) return await interaction.reply(`❌ You do not have a permission to kick this user!`);
            const exampleEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Punishment')
                .setDescription('<@' + interaction.member + '>' + ' has kicked <@' + Target + '> (' + Target.user.tag + ')')
                .addField('Reason:', reason, true)
                .addField('Executor:', '<@' + interaction.member + '>', true)
                .setTimestamp()
            await Target.kick({reason: reason})
            await interaction.reply({embeds: [exampleEmbed], ephemeral: false})
        } else {
            await interaction.reply({ content: "You do not have permission to use this command!", ephemeral: true})
        }
    }
}
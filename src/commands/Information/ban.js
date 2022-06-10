const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require('discord.js');
const { MessageEmbed, WebhookClient} = require('discord.js');
const { Permissions} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a player')
        .addUserOption(option => option
            .setName("target")
            .setRequired(true)
            .setDescription("Player you want to punish"))
        .addStringOption(option => option
            .setName("reason")
            .setRequired(true)
            .setDescription("Reason for the punishment"))
        .addStringOption(option => option
            .setName("time")
            .setRequired(true)
            .setDescription("How long you want to ban for")),
            
    async execute(interaction) {
        if (interaction.member.permissions.has(`BAN_MEMBERS`)) {
            const Target = await interaction.options.getMember('target')
            var amount = await interaction.options.getString('time')
            const reason = await interaction.options.getString('reason')
            if(!Target) return await interaction.reply(`User not found!`);
            if(!Target.kickable) return await interaction.reply(`❌ You do not have a permission to ban this user!`);
            if (!(amount == 'perm')){
                const exampleEmbed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Punishment')
                    .setDescription('<@' + interaction.member + '>' + ' has banned <@' + Target + '> (' + Target.user.tag + ')')
                    .addField('Reason:', reason, true)
                    .addField('Time:', amount + ' day(s)', true)
                    .addField('Executor:', '<@' + interaction.member + '>', true)
                    .setTimestamp()
                await Target.ban({ days: amount, reason: reason})
                await interaction.reply({embeds: [exampleEmbed], ephemeral: false})
            } else {
                const exampleEmbeds = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Punishment')
                    .setDescription('<@' + interaction.member + '>' + ' has banned <@' + Target + '> (' + Target.user.tag + ')')
                    .addField('Reason:', reason, true)
                    .addField('Time:', amount , true)
                    .addField('Executor:', '<@' + interaction.member + '>', true)
                    .setTimestamp()
                    await interaction.reply({embeds: [exampleEmbeds], ephemeral: false})
                await Target.ban({reason: reason})
            }
        } else {
            await interaction.reply({ content: "You do not have permission to use this command!", ephemeral: true})
        }
    }
}
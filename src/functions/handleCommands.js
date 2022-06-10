const {
    REST
} = require('@discordjs/rest');
const {
    Routes
} = require('discord-api-types/v9');
const fs = require('fs');

const clientId = '950927999887347762';
const guildId = '982656302264246302';
const guildIds = '881853347559264256';

module.exports = (client) => {
    client.handleCommands = async (commandFolders, path) => {
        client.commandArray = [];
        for (folder of commandFolders) {
            const commandFiles = fs.readdirSync(`${path}/information`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`../commands/information/${file}`);
                client.commands.set(command.data.name, command);
                client.commandArray.push(command.data.toJSON());
            }
        }

        const rest = new REST({
            version: '9'
        }).setToken("OTUwOTI3OTk5ODg3MzQ3NzYy.GnyRmN.LPTTRLTcKPk1Oe2gVKYi_7lSeh23Td5B_I6jf8");

        (async () => {
            try {
                console.log('Started refreshing application (/) commands.');

                await rest.put(
                    Routes.applicationCommands(clientId), {
                        body: client.commandArray
                    },
                );

      
                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
        })();

    }
}
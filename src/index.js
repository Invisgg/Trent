const {Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, 'DIRECT_MESSAGES'] });

client.commands = new Collection();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventsFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");
(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventsFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands")
    client.login("OTUwOTI3OTk5ODg3MzQ3NzYy.GnyRmN.LPTTRLTcKPk1Oe2gVKYi_7lSeh23Td5B_I6jf8");
    
})();
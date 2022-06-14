const Discord = require('discord.js');
const { MessageEmbed, WebhookClient } = require('discord.js');
const webhookClient = new WebhookClient({ url:'https://discord.com/api/webhooks/934666091442090034/Y6nsun6hwIg5mBfVhu0l7nmd5xKIB8r_x2tFShqoZu9eaFyk33t3urskahqtBAPul1zg' });
const fetch = require('node-fetch')
require("dotenv").config();

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready2');
        //webhookClient.send('`Loaded! (Running on Trent v1.0.0)`')

        client.user.setPresence({ activities: [{ name: 'Trent', type: 'Watching' }], status: 'dnd' });

        var response =  await fetch(`https://api.minehut.com/network/players/distribution`)
        let json =  await response.json()
        var javaTotal = json['javaTotal']
        var javaLobby = json['javaLobby']
        var javaPlayerServer = json['javaPlayerServer']
        var bedrockTotal = json['bedrockTotal']
        var bedrockLobby = json['bedrockLobby']
        var bedrockPlayerServer = json['bedrockPlayerServer']

        var totalPlayers = javaTotal + bedrockTotal
        var totalLobbyPlayers = javaLobby + bedrockLobby
        var totalServerPlayers = javaPlayerServer + bedrockPlayerServer

        client.user.setActivity(`${totalPlayers} minehut players`); 

        setInterval(async function() {
            var response =  await fetch(`https://api.minehut.com/network/players/distribution`)
            let json =  await response.json()
            var javaTotal = json['javaTotal']
            var javaLobby = json['javaLobby']
            var javaPlayerServer = json['javaPlayerServer']
            var bedrockTotal = json['bedrockTotal']
            var bedrockLobby = json['bedrockLobby']
            var bedrockPlayerServer = json['bedrockPlayerServer']
    
            var totalPlayers = javaTotal + bedrockTotal
    
            client.user.setActivity(`${totalPlayers} minehut players!`); 
        }, 1000*30);
        //client.user.setPresence({ game: { name: 'I help run Minehut and love espresso.', type: "streaming", url: "https://minehut.com"}}); 

    }
}


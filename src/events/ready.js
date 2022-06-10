const Discord = require('discord.js');
const { MessageEmbed, WebhookClient } = require('discord.js');
const webhookClient = new WebhookClient({ url:'https://discord.com/api/webhooks/934666091442090034/Y6nsun6hwIg5mBfVhu0l7nmd5xKIB8r_x2tFShqoZu9eaFyk33t3urskahqtBAPul1zg' });


module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready2');
        //webhookClient.send('`Loaded! (Running on Trent v1.0.0)`')

        client.user.setPresence({ activities: [{ name: 'Trent', type: 'Watching' }], status: 'dnd' });
        client.user.setActivity("Drinking espresso "); 
        //client.user.setPresence({ game: { name: 'I help run Minehut and love espresso.', type: "streaming", url: "https://minehut.com"}}); 

    }
}


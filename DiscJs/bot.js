// Discord.js Bot - Basic Setup
const { Client, GatewayIntentBits, Events } = require('discord.js');

// Create a new client instance (add MessageContent back after enabling intent)
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent  // Add this back after enabling in Discord portal
    ]
});

// When the client is ready, run this code
client.once(Events.ClientReady, readyClient => {
    console.log(`✅ Bot is online! Logged in as ${readyClient.user.tag}`);
});

// Listen for messages
client.on(Events.MessageCreate, async message => {
    // Ignore messages from bots
    if (message.author.bot) return;

    // Basic ping command
    if (message.content.toLowerCase() === '!ping') {
        await message.reply('🏓 Pong!');
    }

    // Hello command
    if (message.content.toLowerCase() === '!hello') {
        await message.reply(`👋 Hello ${message.author.username}!`);
    }

    // Server info command
    if (message.content.toLowerCase() === '!serverinfo') {
        const guild = message.guild;
        const embed = {
            color: 0x0099FF,
            title: `📊 ${guild.name} Server Info`,
            fields: [
                {
                    name: 'Members',
                    value: guild.memberCount.toString(),
                    inline: true
                },
                {
                    name: 'Created',
                    value: guild.createdAt.toDateString(),
                    inline: true
                },
                {
                    name: 'Owner',
                    value: `<@${guild.ownerId}>`,
                    inline: true
                }
            ],
            timestamp: new Date().toISOString()
        };
        await message.reply({ embeds: [embed] });
    }

    // Help command
    if (message.content.toLowerCase() === '!help') {
        const helpEmbed = {
            color: 0x00FF00,
            title: '🤖 Bot Commands',
            description: 'Here are the available commands:',
            fields: [
                {
                    name: '!ping',
                    value: 'Check if the bot is responsive'
                },
                {
                    name: '!hello',
                    value: 'Get a friendly greeting'
                },
                {
                    name: '!serverinfo',
                    value: 'Display server information'
                },
                {
                    name: '!help',
                    value: 'Show this help message'
                }
            ]
        };
        await message.reply({ embeds: [helpEmbed] });
    }
});

// Error handling
client.on(Events.Error, error => {
    console.error('❌ Discord client error:', error);
});

// Login to Discord with your bot token
// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login('Your_Token');

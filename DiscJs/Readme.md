# Discord Bot

A simple Discord bot built with Discord.js that provides basic functionality and commands for your Discord server.

## Features

- 🏓 **Ping Command** - Check if the bot is responsive
- 👋 **Greeting Command** - Get a friendly welcome message
- 📊 **Server Info** - Display detailed server information
- 🤖 **Help Command** - List all available commands
- 🛡️ **Error Handling** - Robust error handling for stability

## Commands

| Command | Description |
|---------|-------------|
| `!ping` | Check if the bot is responsive |
| `!hello` | Get a friendly greeting |
| `!serverinfo` | Display server information (member count, creation date, owner) |
| `!help` | Show all available commands |

## Prerequisites

- [Node.js](https://nodejs.org/) (v16.9.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A Discord account and server

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/discord-bot.git
   cd discord-bot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your Discord bot**
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications)
   - Click "New Application" and give it a name
   - Go to the "Bot" section and click "Add Bot"
   - Copy the bot token

4. **Configure the bot**
   - Open `bot.js` and replace `'YOUR_BOT_TOKEN'` with your actual bot token
   - **Important**: Never share your bot token publicly!

5. **Enable required intents**
   - In the Discord Developer Portal, go to your bot's "Bot" section
   - Scroll down to "Privileged Gateway Intents"
   - Enable "Message Content Intent"
   - Click "Save Changes"

6. **Invite the bot to your server**
   - In the Discord Developer Portal, go to "OAuth2" > "URL Generator"
   - Select "bot" scope
   - Select the permissions your bot needs:
     - Send Messages
     - Read Message History
     - Use Slash Commands (if planning to add them)
   - Copy the generated URL and open it in your browser
   - Select your server and authorize the bot

## Usage

1. **Start the bot**
   ```bash
   npm start
   ```

2. **For development (with auto-restart)**
   ```bash
   npm run dev
   ```

3. **Use commands in Discord**
   - Type `!help` to see all available commands
   - Try `!ping` to test if the bot is working

## Project Structure

```
discord-bot/
├── bot.js          # Main bot file
├── package.json    # Dependencies and scripts
├── README.md       # This file
└── node_modules/   # Installed dependencies (auto-generated)
```

## Configuration

### Environment Variables (Recommended)

For better security, consider using environment variables for your bot token:

1. Create a `.env` file in the root directory:
   ```
   DISCORD_TOKEN=your_bot_token_here
   ```

2. Install dotenv:
   ```bash
   npm install dotenv
   ```

3. Update your bot.js:
   ```javascript
   require('dotenv').config();
   client.login(process.env.DISCORD_TOKEN);
   ```

4. Add `.env` to your `.gitignore` file to keep your token private

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Common Issues

### "Used disallowed intents" error
- Make sure you've enabled "Message Content Intent" in the Discord Developer Portal
- Check that your bot has the necessary permissions in your server

### Bot not responding to commands
- Verify the bot is online and has joined your server
- Check that the bot has permission to read and send messages in the channel
- Ensure you're using the correct command prefix (`!`)

### "Invalid Token" error
- Double-check that you've copied the bot token correctly
- Make sure you're using the bot token, not the application ID or client secret

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:
- Check the [Discord.js documentation](https://discord.js.org/)
- Open an issue on GitHub
- Join the [Discord.js community](https://discord.gg/djs)

## Roadmap

Future features planned:
- [ ] Slash commands support
- [ ] Database integration
- [ ] Moderation commands
- [ ] Music functionality
- [ ] Custom command creation
- [ ] Web dashboard

---

**Note**: Remember to keep your bot token secure and never commit it to version control!

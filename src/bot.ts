// Require the necessary discord.js classes
import { Client, GatewayIntentBits } from 'discord.js'
import ready from './listeners/ready'
import interactionCreate from './listeners/interactionCreate'

const token = process.env.DISCORD_TOKEN as string

console.log('Bot is starting...')

const client = new Client({ 
	intents: [GatewayIntentBits.Guilds] 
})

ready(client, token)
interactionCreate(client)

client.login(token)

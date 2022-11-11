import { REST, Routes } from 'discord.js'
import type { RESTPutAPIApplicationCommandsResult } from 'discord.js'
import { commands } from './commands/index'

const deployCommands = async (token: string): Promise<void> => {
  const clientId = process.env.DISCORD_CLIENT_ID as string
  const rest = new REST({ version: '10'}).setToken(token)

  try {
    console.log(`Deploying ${commands.length} command(s).`)

    const data = await rest.put(
      Routes.applicationCommands(clientId),
      { body: commands.map(c => c.data.toJSON()) }
    ) as RESTPutAPIApplicationCommandsResult

    console.log(`Successfully deployed ${data.length} application command(s).`)
  } catch (error) {
    console.error(error)
  }
}

export {
  commands,
  deployCommands
}
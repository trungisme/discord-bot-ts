import { Client, Events } from 'discord.js'
import { deployCommands } from '../commands'

export default (client: Client, token: string): void => {
  client.once(Events.ClientReady, async () => {
    if (!client.user || !client.application) {
      return
    }

    deployCommands(token)

    console.log(`Ready! ${client.user.username} is online.`)
  })
}

import { Client, Events, CommandInteraction, SlashCommandAssertions } from 'discord.js'
import type { Interaction } from 'discord.js'
import { commands } from '../commands'

const handleCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
  const command = commands.find(c => c.data.name === interaction.commandName)
  if (!command) {
    interaction.followUp({ content: "An error has occurred." })
    console.error(`No command matching ${interaction.commandName} was found.`)
    return
  }

  try {
    // await interaction.deferReply()
    command.execute(interaction)
  } catch (error) {
    console.error(error)
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true
    })
  }
}

export default (client: Client): void => {
  client.on(Events.InteractionCreate, async (interaction: Interaction) => {
    if (interaction.isCommand() || interaction.isContextMenuCommand()) {
      await handleCommand(client, interaction)
    }
  })
}

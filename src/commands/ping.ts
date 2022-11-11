import { SlashCommandBuilder } from 'discord.js'
import type { CommandInteraction } from 'discord.js'

const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with Pong!')

const execute = async (interaction: CommandInteraction): Promise<void> => {
  await interaction.reply({
    content: 'Pong!',
    ephemeral: true 
  })
}

export default {
  data,
  execute
}

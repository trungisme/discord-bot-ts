
import { SlashCommandBuilder } from 'discord.js'
import type { CommandInteraction } from 'discord.js'

const Ping = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  execute: async (interaction: CommandInteraction): Promise<void> => {
    await interaction.reply({
      content: 'Pong!',
      ephemeral: true 
    })
  }
}

export default Ping

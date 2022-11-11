import { CommandInteractionOptionResolver, SlashCommandBuilder } from 'discord.js'
import type { CommandInteraction } from 'discord.js'

const data = new SlashCommandBuilder()
  .setName('info')
  .setDescription('Get information')
  .addSubcommand(subcommand => subcommand
    .setName('user')
    .setDescription('Info about a user')
    .addUserOption(option => option
      .setName('target')
      .setDescription('The user')
    )
  )
  .addSubcommand(subcommand => subcommand
    .setName('server')
    .setDescription('Info about the server')
  )

const execute = async (interaction: CommandInteraction): Promise<void> => {
  const options = interaction.options as CommandInteractionOptionResolver
  if (options.getSubcommand() === 'user') {
    const user = options.getUser('target')
    if (user) {
      await interaction.reply({
        content: `Username: ${user.username}\nID: ${user.id}.`,
        ephemeral: true
      })
    } else {
      await interaction.reply({
        content: `Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}.`,
        ephemeral: true
      })
    }
  } else if (options.getSubcommand() === 'server') {
    await interaction.reply({
      content: `Server name: ${interaction.guild?.name}\nTotal members: ${interaction.guild?.memberCount}.`,
      ephemeral: true
    })
  }
}

export default {
  data,
  execute
}

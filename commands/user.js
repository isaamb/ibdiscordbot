const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies (secretly) with your tag and ID!'),
	async execute(interaction) {
		await interaction.reply({content: `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`, ephemeral: true});
	},
};
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('celebrate')
		.setDescription('Celebration!'),
	async execute(interaction) {
		await interaction.reply('🎉🎉🎉');
	},
};
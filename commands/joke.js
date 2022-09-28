const { SlashCommandBuilder } = require('discord.js');

module.exports = {
 data: new SlashCommandBuilder()
	.setName('joke')
	.setDescription('Hear a good (I swear) joke!'),
	async execute(interaction) {
        jokeNum = Math.floor(random(0,1));
        //joke credits https://parade.com/998354/jessicasager/bad-jokes/
		switch (jokeNum) {
            case 0:
                joke = 'What does a baby computer call its father?';
                answer = 'Data.';
            break;
            case 1:
                joke = 'Why does Snoop Dogg carry an umbrella?';
                answer = 'Fo\' drizzle';
            break;
        }
        await interaction.reply({ content: joke, ephemeral: true });
        await wait(2000);
        await interaction.followUp({ content: answer, ephemeral : true });
    },
		};

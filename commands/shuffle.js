const {GuildMember} = require('discord.js');

module.exports = {
    name: 'shuffle',
    description: 'Shuffle a queue',
    async execute(interaction, player){
        await interaction.deferReply();
        const queue = player.getQueue(interaction.guildId);
        if (!queue || !queue.playing)
        return void interaction.followUp({
          content: '❌ | No music is being played!',
        });
        await queue.shuffle();
        
        interaction.followUp({ content: "✅ | Queue has been shuffled!" });
    }
}
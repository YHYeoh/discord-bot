const {GuildMember} = require('discord.js');

module.exports = {
    name:'bassboost',
    description: 'Bass Boooooooooooooooooooost',
    async execute(interaction, player){
        const queue = client.player.getQueue(interaction.guild);
        await interaction.deferReply();
        if (!queue || !queue.playing)
            return void interaction.followUp({
                content:'❌ | No music is being played!'
            });
        await queue.setFilters({
            bassboost: !queue.getFiltersEnabled().includes("bassboost"),
            normalizer2: !queue.getFiltersEnabled().includes("bassboost")
        });

        return void interaction.followUp({ 
            content: `🎵 | Bassboost ${queue.getFiltersEnabled().includes("bassboost") ? "Enabled" : "Disabled"}!` 
        });
    }
}
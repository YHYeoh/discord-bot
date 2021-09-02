const {GuildMember} = require('discord.js');

module.exports = {
    name : 'jump',
    description : 'Jumps to specified track',
    options:[
        {
            name:'tracks',
            description:"How much tracks to skip?",
            required: true,
            type: 10
            
        }
    ],
    async execute(interaction, player){
        await interaction.deferReply();
        const queue = player.getQueue(interaction.guildId);
        const tracksCount = interaction.options.get('tracks').value;
        if (!queue || !queue.playing)
        return void interaction.followUp({
          content: '❌ | No music is being played!',
        });
        queue.jump(queue.tracks[tracksCount+1]);

        interaction.followUp({ content: `⏭ | Skipped ${tracksCount} tracks!` });
    }
}
const {GuildMember} = require('discord.js');

module.exports = {
    name : 'jump',
    description : 'Jumps to specified track',
    options:[
        {
            name:'number',
            description:"Where you want to jump to?",
            type: 10,
            required: true
        }
    ],
    async execute(interaction, player){
        await interaction.deferReply();
        const queue = player.getQueue(interaction.guildId);
        const tracksCount = interaction.options.get('number').value;
        if (!queue || !queue.playing)
        return void interaction.followUp({
          content: '❌ | No music is being played!',
        });
        queue.jump(queue.tracks[tracksCount]);

        interaction.followUp({ content: `⏭ | Skipped ${tracksCount} tracks` });
    }
}
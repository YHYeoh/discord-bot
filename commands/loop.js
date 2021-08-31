const {GuildMember} = require('discord.js');
const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    description: 'Queue -> Play -> Repeat',
    options: [
        {
            name:'mode',
            type: 10 ,// 'NUMBER' Type
            description: 'Seets loop mode',
            required: true,
            choices: [
                {
                    name: "Off",
                    value: QueueRepeatMode.OFF
                },
                {
                    name: "Track",
                    value: QueueRepeatMode.TRACK
                },
                {
                    name: "Queue",
                    value: QueueRepeatMode.QUEUE
                },
                {
                    name: "Autoplay",
                    value: QueueRepeatMode.AUTOPLAY
                }
            ]
        }
    ],
    async execute(interaction, player){
        await interaction.deferReply();
        const queue = player.getQueue(interaction.guildID);
        if (!queue || !queue.playing)
        return void interaction.followUp({
          content: '❌ | No music is being played!',
        });
        const loopMode = interaction.options.mode;
        const success = queue.setRepeatMode(loopMode);
        const mode = loopMode === QueueRepeatMode.TRACK ? "🔂" : loopMode === QueueRepeatMode.QUEUE ? "🔁" : "▶";
        return void interaction.followUp({ 
            content: success ? `${mode} | Updated loop mode!` : "❌ | Could not update loop mode!" 
        });
    }
}
const Discord = require('discord.js');
const client = new Discord.Client();

client.login('TOKEN');

client.on('ready', ()=>{
    console.log('Logged in as '+client.user.tag)
})

const options = {
    botid: "755580145078632508",
    matchreg: /h!(trick|treat|)/,
    inguild: '322850917248663552',
    inchannel: '339171072832176138',
    min: 100,
    max: 1000
}

function getRandomTypeLength(min=options.min, max=options.max) {
  return Math.random() * (max - min) + min;
}

async function asyncsleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function inGuild(id) {
  return (options.inguild ? id==options.inguild : true)
}

function inChannel(id) {
  return (options.inchannel ? id==options.inchannel : true)
}

client.on('message', async (msg)=>{
    if (msg.author.id==options.botid&&inGuild(msg.guild.id)&&inChannel(msg.channel.id)&&msg.embeds.length==1&&msg.embeds[0].description&&msg.embeds[0].description.match(options.matchreg)) {
        let tosend=msg.embeds[0].description.match(options.matchreg)[0]
        await msg.channel.startTyping();
        await asyncsleep(getRandomTypeLength());
        await msg.channel.send(tosend);
        msg.channel.stopTyping()
    }
})

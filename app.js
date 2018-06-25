const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");

client.on('ready', () => (
    console.log('BOT RiosBot adı ile giriş yaptı.')
));

let prefix = 'rb!'

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'avatarim')) {
        message.channel.send(message.author.avatarURL);
    }
    if (!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix + "oyunyap")) {
        client.user.setActivity(`${prefix}yardim - riosbot.xyz - Türkçe Discord Botu`)
    }
    if (!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'ping')) {
        message.reply('Pong!' + client.ping + 'ms');
    }
    if (!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'sil')) {
        message.channel.bulkDelete(50);
        message.channel.sendMessage("50 adet mesaj sildim führerim.");
    }
    if (!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'yardim'))
        message.channel.sendMessage("**RiosBot** Yardım \n**1-)** Prefiximiz **rb!** dir.\n**2-)** rb!sil => 50 tane mesajı siler.\n**3-)** rb!yardim => Yardım listesini açarsınız. \n**4-)** rb!otorol '@Grup' (YAKINDA) \n**5-)** rb!cal 'Sarki Ismi' (YAKINDA)\n**6-)** rb!avatarim => Avatarınızı görürsünüz.\n**7-)** rb!ping => Pinginizi öğrenmenize yarar.");
});

client.on('message', msg => {
    if (msg.content === 'sa') {
        msg.reply('Aleyküm selam hoşgeldin.');
    }
});

client.on('message', msg => {
    if (msg.content === 'orospu') {
        msg.delete()
        .then(msg => console.log(`${msg.author.username} isimli gavatın mesajını sildim.`))
        msg.reply('Küfür etme terbiyesiz!')
    }
});

client.on('message', msg => {
    if (msg.content === 'amk') {
        msg.delete()
        msg.reply('Küfür etme terbiyesiz!')
    }
});

client.on('message', msg => {
    if (msg.content === 'aq') {
        msg.delete()
        .then(msg => console.log(`${msg.author.username} isimli gavatın mesajını sildim.`))
        msg.reply('Küfür etme terbiyesiz!')
    }
});

client.on('message', msg => {
    if (msg.content === 'mk') {
        msg.delete()
        .then(msg => console.log(`${msg.author.username} isimli gavatın mesajını sildim.`))
        msg.reply('Küfür etme terbiyesiz!')
    }
});
client.on('message', msg => {
    if (msg.content === 'oç') {
        msg.delete()
        .then(msg => console.log(`${msg.author.username} isimli gavatın mesajını sildim.`))
        msg.reply('Küfür etme terbiyesiz!')
    }
});

client.on('message', msg => {
    if (msg.content === 'sg') {
        msg.delete()
        .then(msg => console.log(`${msg.author.username} isimli gavatın mesajını sildim.`))
        msg.reply('Küfür etme terbiyesiz!')
    }
});

client.on('message', msg => {
    if (msg.content === 'siktir') {
        msg.delete()
        .then(msg => console.log(`${msg.author.username} isimli gavatın mesajını sildim.`))
        msg.reply('Küfür etme terbiyesiz!')
    }
});

client.on('message', msg => {
    if (msg.content === 'piç') {
        msg.delete()
        .then(msg => console.log(`${msg.author.username} isimli gavatın mesajını sildim.`))
        msg.reply('Küfür etme terbiyesiz!')
    }
});

client.on('message', msg => {
    if (msg.content === 'mq') {
        msg.delete()
        .then(msg => console.log(`${msg.author.username} isimli gavatın mesajını sildim.`))
        msg.reply('Küfür etme terbiyesiz!')
  }
});

client.login(ayarlar.token);

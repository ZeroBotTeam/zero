 // MAIN SETUP test22221

const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
  token: process.env.TOKEN,
prefix: ['$getServerVar[prefix]', '<@$clientID>', '<@!$clientID>'],
  autoUpdate: true,
})


// VARIABLES, DO NOT DELETE

bot.variables({



})


bot.onMessage()


//STATUS


bot.status({
    text: '🎃 $allMembersCount members',
    type: 'WATCHING',
    status: 'online',
    time: 15
});



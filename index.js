 // MAIN SETUP

const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
  token: process.env.TOKEN,
prefix: ['$getServerVar[prefix]', '<@$clientID>', '<@!$clientID>'],
  autoUpdate: true,
})


// VARIABLES, DO NOT DELETE

bot.variables({
prefix: ".",
warn: "0",
reason: "0",
endstamp:"0",
hoster:"",
prize:"",
joined:"0",
joinedusers:"",
ended:"false"

})


bot.onMessage()


//STATUS


bot.status({
    text: '🎃 $allMembersCount members',
    type: 'WATCHING',
    status: 'online',
    time: 15
});

// Welcome command

bot.joinCommand({
channel: "799525792895860739",
code: 
`
<@$authorID> <a:aAnnouncement:802890901558525962> Welcome to **$servername** 
$title[Welcome $username!] 
$description[ 
  **What is FX Helpers**
FX Helpers is a designing discord server for everyone,here you can get opinions by more experienced designers so your skill level can improve. You can also get tips and tricks to start out your designing career.

**Commonly Asked Questions:** 
Are you looking for staff members: We are always looking for an active staff/management team to represent us. Currently we have a full moderator/admin team but we are looking for promotion managers and general managers.

More informations and guildlines can be [found here](https://discord.com/channels/724631975507394621/724634402704982047/831504781901430815)
 
  ] 
  $color[BLUE]
  $addTimestamp
  $image[https://media.discordapp.net/attachments/824562643964002324/826104372512817152/fxhelpers.gif] `
  });
  bot.onJoined()

bot.command({
    name: "warn",
    code: `
    <:database:899638378864201758> Warning recorded to the database.
    $author[$userTag[$findUser[$message[1];no]] has been warned;$userAvatar[$findUser[$message[1];no]]]
    $title[Warn information: ]
    $description[
      **Moderator:** $userTag[$authorID]
      **Reason:** $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]]
    $color[RED]
    $footer[FX Helpers]
    $addTimestamp
    $setUserVar[warn;$sum[$getUserVar[warn;$findUser[$message[1];no]];1];$findUser[$message[1];no]]

    $onlyIf[$isBot[$findUser[$message[1];no]]==false;<:false:899634528086294588> {title:Error!}{description: You can't warn bots}
    {thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]

    $onlyPerms[kick;{title:Error!}{description:you need \`Kick\` permission}{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]

    $onlyIf[$findUser[$message[1];no]!=$ownerID;{title:Error!} {description:<:false:899634528086294588> You can't warn the owner of the server}
    {thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]
  

    $onlyIf[$findUser[$message[1];no]!=$authorID;{title:Error!} {description: <:false:899634528086294588> You can't warn yourself! Stupid}
    {thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}

    $argsCheck[>1;{title:Error!} {description: <a:aAnnouncement:802890901558525962> Correct usage: 
    
    .warn @user/ID optional reason} 
    {thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]

    $suppressErrors[{title:Error!}{description: <:false:899634528086294588> Mentioned user not found!}
    {thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]`
 });

 // ban 

bot.command({
  name: "ban",
  code: `$argsCheck[1;Invalid command usage, try using it like:
$getServerVar[prefix]ban [member] (optional reason)

Example:
$getServerVar[prefix]ban @user/ID optional reason]
  $author[$userTag[$findUser[$message[1];no]] has been banned;$userAvatar[$findUser[$message[1];no]]
  $description[**Moderator:** $userTag[$authorID]
  **Reason:** $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]]
  $color[BLUE]
  $addTimestamp
  $ban[$findUser[$message[1];no];$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]]
  $onlyBotPerms[ban;{title:Error!}{description:I need \`Ban\` permission to do this}{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]
  $onlyPerms[ban;{title:Error!}{description:You need \`Ban\` permission to do this}{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]
  $onlyIf[$findUser[$message[1];no]!=$authorID;{title:Error!}{description:Huh? You can't ban yourself}{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]
  $onlyIf[$findUser[$message[1];no]!=$ownerID;{title:Error!}{description:You can't ban the owner of the server!}{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]
  $onlyIf[$isBanned[$findUser[$message[1];no]]==false;{title:Error!}{description:That user was already banned from the server}{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]
  $onlyIf[$findUser[$message[1];no]!=$clientID;{title:Error!}{description:I cant get self-banned...Just kick me then...i suppose...}{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]
  $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1];no]]];{title:Error!}{description:This user has higher role than me! Give me the highest role to help you!}{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]
  $suppressErrors[{title:Error!}{description:Can't locate user}{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]`
  });


  bot.command({
name: "tier3",
code: `$color[BLUE]
$giveRoles[$mentioned[1];849652404789444638]

$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];]

$onlyIf[$mentioned[1]!=;]
`
})


  bot.command({
name: "tier3",
code: `
<:database:899638378864201758> This promote recorded to database

$color[BLUE]
$giveRoles[$mentioned[1];849641754771587102]
$title[Role given to $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[Moderator **$username** promoted **$username[$mentioned[1;yes]]** to **Tier 3**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{title:Error!} {description: That user is higher than me on role position }{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{title:Error!} {description: That user is higher/equal than you on role position}{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]

$onlyIf[$mentioned[1]!=;{title:Error!}{description:You must mention someone}
{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]

$onlyForRoles[900355439974285412;{title:Error!}{description:You must have the role <@&900355439974285412> to add roles}
{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}] `


})


 bot.command({
name: "tier2",
code: `
<:database:899638378864201758> This promote recorded to database

$color[BLUE]
$giveRoles[$mentioned[1];744268711086522422]
$giveRoles[$mentioned[1];849641754771587102]
$takeRoles[$mentioned[1];849652404789444638]
$title[Role given to $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[Moderator $username promoted $username[$mentioned[1;yes]] to **Tier 2** and removed from **Tier 3** ]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{title:Error!} {description: That user is higher than me on role position }{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{title:Error!} {description: That user is higher/equal than you on role position}{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]

$onlyIf[$mentioned[1]!=;{title:Error!}{description:You must mention someone}
{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]

$onlyForRoles[900355439974285412;{title:Error!}{description:You must have the role <@&900355439974285412> to add roles}
{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}] `


})

 bot.command({
name: "tier1",
code: `
<:database:899638378864201758> This promote recorded to database

$color[BLUE]
$giveRoles[$mentioned[1];724641253920342096]
$giveRoles[$mentioned[1];849641754771587102]
$takeRoles[$mentioned[1];744268711086522422]
$title[Role given to $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[Moderator $username promoted $username[$mentioned[1;yes]] to **Tier 1** and removed from **Tier 2** ]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{title:Error!} {description: That user is higher than me on role position }{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{title:Error!} {description: That user is higher/equal than you on role position}{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]

$onlyIf[$mentioned[1]!=;{title:Error!}{description:You must mention someone}
{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]

$onlyForRoles[900355439974285412;{title:Error!}{description:You must have the role <@&900355439974285412> to add roles}
{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}] `


})


bot.command({
name: "demote",
code: `
<:database:899638378864201758> This demote recorded to database
$takeRoles[$mentioned[1];724641253920342096]
$takeRoles[$mentioned[1];744268711086522422]
$takeRoles[$mentioned[1];849652404789444638]
$takeRoles[$mentioned[1];849641754771587102]
$color[BLUE]
$title[Demoted $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[Moderator $username demoted and lost all designer/editor ranks from $username[$mentioned[1;yes]]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{title:Error!} {description: That user is higher than me on role position }{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{title:Error!} {description: That user is higher/equal than you on role position}{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]

$onlyIf[$mentioned[1]!=;{title:Error!}{description:You must mention someone}
{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}]

$onlyForRoles[900355439974285412;{title:Error!}{description:You must have the role <@&900355439974285412> to remove roles}
{thumbnail:https://cdn.discordapp.com/emojis/867140143676915726.png?v=1}{color:RED}] `
})

bot.command({
  name: "apply",
  code:`
  $description[[Apply for Moderator](https://forms.gle/BzTKscoR97baREnB9)]
  $color[BLUE]`
})

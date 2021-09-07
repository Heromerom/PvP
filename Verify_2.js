/* 
MODAL: CHECK YOUR DIRECT MESSAGES 
AUTOCODE - DISCORD JS LIBRARIES
Designed by Pen.
*/

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.1.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": `<@!UserID>`,
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `✔️ CHECK YOUR DIRECT MESSAGES `,
      "description": `_We have sent you a message_. **Reply** with your AQWorlds' account nickname.`,
      "color": 0x22e65d,
      "thumbnail": {
        "url": `https://media.discordapp.net/attachments/698290316025004144/699358166437330994/success.gif?width=472&height=472`,
        "height": 0,
        "width": 0
      }
    }
  ]
});

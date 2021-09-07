const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.1.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`, // Channel ID.
  "content": `<@!UserID>`,
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 3,
          "label": `VERIFY MY ACCOUNT`,
          "custom_id": `VerifyMe`, // Use this ID to call the function.
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `✔`
          },
          "type": 2
        },
        {
          "style": 1,
          "label": `ASK FOR HELP`,
          "custom_id": `AskHelp`, // Use this ID to call the function.
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `📣`
          },
          "type": 2
        }
      ]
    }
  ],
  "allowed_mentions": {
    "replied_user": false,
    "parse": [
      "users"
    ],
    "users": [
      "{USER_WHO_INTERACTED}"
    ]
  },
  "embeds": [
    {
      "type": "rich",
      "title": `⭐ WELCOME TO THE PVP LEAGUE ⭐`,
      "description": `You must **verify your account** in order to fight other players!`,
      "color": 0xeeb406,
      "thumbnail": {
        "url": `https://i.imgur.com/cKTiS0z.png`, // THUMBNAIL PLACEHOLDER
        "height": 0,
        "width": 0
      }
    }
  ]
});

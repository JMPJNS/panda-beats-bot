import Discord from "discord.js"
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity("Panda Beats", {
    type: "LISTENING",
    url: "https://spoti.fi/3837R8S"
  })
})

client.on("message", msg => {
    const b = msg.mentions.users.get("784474273683210241")
    if (b) {
        const em = new Discord.MessageEmbed()
            .setColor("#B1A9FE")
            .setTitle("Hier Panda Beats hören")
            .setDescription("Die Panda Beats Musik ist komplett gratis, Copyright und DMCA free! Für Twitch, Streams und Youtube Videos! Keine Sorge vor Bans oder Strikes!")
            .addFields(
                    { name: "Youtube", value: "https://bit.ly/2WnLtSB" },
                    { name: "Spotify", value: "https://spoti.fi/3837R8S" },
                    { name: "Apple Music", value: "https://apple.co/3lY6FZt" }
            )
        
        msg.reply(em)
    }
})

client.login(process.env.BOT_TOKEN)
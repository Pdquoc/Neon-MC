(async()=>{
    "use strict";

    // Dependencies
    const request = require("request-async")

    // Variables
    const args = process.argv.slice(2)

    // Main
    if(!args.length) return console.log("usage: node index.js <serverIP>")

    var response = await request(`https://api.mcsrvstat.us/2/${args[0]}`)
    response = JSON.parse(response.body)

    if(!response.online) return console.log("Unable to get the server information.")

    console.log(`
╔╦╗╔═╗╔╦╗╔═╗  ╔╗ ╦ ╦  ═╗ ╦╔╗╔╔═╗╔═╗╔╗╔
║║║╠═╣ ║║║╣   ╠╩╗╚╦╝  ╔╩╦╝║║║║╣ ║ ║║║║
╩ ╩╩ ╩═╩╝╚═╝  ╚═╝ ╩   ╩ ╚═╝╚╝╚═╝╚═╝╝╚╝
\x1b[38;2;173;255;47mServer IP:\x1b[38;5;231m ${args[0]}
\x1b[38;2;173;255;47mServer Name:\x1b[38;5;231m ${response.hostname}
\x1b[38;2;173;255;47mServer Port:\x1b[38;5;231m ${response.port}
\x1b[38;2;173;255;47mServer Protocol:\x1b[38;5;231m ${response.protocol}
\x1b[38;2;173;255;47mServer Icon:\x1b[38;5;231m ${response.icon}
\x1b[38;2;173;255;47mServer Version:\x1b[38;5;231m ${response.version}
\x1b[38;2;173;255;47mServer Software:\x1b[38;5;231m ${response.software}

\x1b[38;2;173;255;47mPlayers Online:\x1b[38;5;231m ${response.players.online}
\x1b[38;2;173;255;47mPlayers Max:\x1b[38;5;231m ${response.players.max}

\x1b[38;2;173;255;47mServer Online:\x1b[38;5;231m ${response.online}`)
    process.exit()
})()

'use strict';

wss.on("connection", ws => {
    console.log("new client connected");

    ws.on("message", data => {
        console.log(`from Client: ${data}`)
        if  (data == "88ef9be655f2d44681d4cff75beaf74d7758fb387f499c9d3014874817f6ff29")

        {
            console.log(`match`)

            ws.send('match')
        }


    });
    ws.on("close", () => {
        console.log("the client has dis-connected");
    });

    ws.onerror = function () {
        console.log("Some Error occurred")
    }
});
console.log("The WebSocket server is running on port 1211");

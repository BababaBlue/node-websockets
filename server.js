'use strict';
//const JsHashes =  ["77c71b815b54e16dfdcb0cce2288b0b4f7cef98d34eabc494568f90a64d82a96"];
const JsHashes = process.env.JSKEY.split(",");
console.log(JsHashes);
const express = require('express');
const { Server } = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on("connection", ws => {
    console.log("new client connected");

    ws.on("message", data => {
        console.log(`from Client : ${data}`)
        if  (JsHashes.includes(data))

        {
            console.log(`match`)

            ws.send('match')
        }
        else
        {
         console.log(":) ")
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

const WebSocket=require('ws')
const webSocket = new WebSocket.Server({port:9898});

webSocket.on("connection", connection=>{
    connection.on("message",(clientMsg)=>{
        console.log("client Sent this message",clientMsg.toString())
        connection.send(clientMsg.toString())
    })
})
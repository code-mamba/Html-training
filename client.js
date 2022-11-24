

const clientwebSocket=new WebSocket("ws://localhost:9898")
clientwebSocket.addEventListener("open",()=>{
    document.getElementById("btn").addEventListener("click",()=>{
       var cli_msg =  document.getElementById("textmsg").value
       clientwebSocket.send(cli_msg)

    })
})
clientwebSocket.addEventListener("message",(getmsg)=>{
    console.log(getmsg.data)
})
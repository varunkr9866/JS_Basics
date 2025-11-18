//node server which will handle connections
const io = require('socket.io')(8000)

constusers = {};

io.on('connection',socket=>{
    socket.on('user-joined',name=>{
        
    }
    )
})
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

const PORT = process.env.PORT || 3080;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

/* app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
}); */

io.on('connection', (socket) => {
    console.log('a user connected');
    io.emit('entrou', 'Uma pessoa entrou no chat!');
    socket.on('disconnect', () => {
        io.emit('saiu', 'Uma pessoa saiu do chat!');
    });
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`))

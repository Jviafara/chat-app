require('dotenv').config();
const express = require('express');
const { chats } = require('./data/data.js');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to chat API!');
});

app.get('/api/chats', (req, res) => {
    res.send(chats);
});

app.get('/api/chats/:id', (req, res) => {
    const chat = chats.find((c) => c._id === req.params.id);
    res.send(chat);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('listening on port: ' + port);
});

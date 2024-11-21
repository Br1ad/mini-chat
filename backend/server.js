const express = require('express');
const messageRouter = require('./routes/message/messageRouter.js');
const userRouter = require('./routes/user/userRouter.js');
const mongoose = require("mongoose");

const app = express();

const DB_URL = 'mongodb+srv://piebee007:2mkCgsL3Di2qIqN5@chatapp.ltncm.mongodb.net/?retryWrites=true&w=majority&appName=chatapp';

app.use(express.json());
app.use('/api', messageRouter);
app.use('/api', userRouter);

const port = 3000;

startServer();

function startServer() {
    try {
        app.listen(port, () => console.log('Listening on port ' + port));
        mongoose.connect(DB_URL)
            .then(() => console.log('MongoDB Connected'))
            .catch((error) => console.error('Connection error:', error));
    } catch (err) {
        console.log(err);
    }
}

const mongoose = require('mongoose');

const Message = new mongoose.Schema({
    author: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, required: false },
    chatRoomId: { type: String, required: true }
})

module.exports = mongoose.model('Message', Message);
const mongoose = require('mongoose');

const User = new mongoose.Schema({
    nickname: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, required: false },
    lastLoginAt: { type: Date, required: false },
    avatarURL: { type: String, required: false}
});

module.exports = mongoose.model('User', User);

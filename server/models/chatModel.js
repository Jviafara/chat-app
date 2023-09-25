const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
    {
        isGroupChat: { type: Boolean, default: false },
        chatName: { type: String, trim: true },
        users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        latest: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
        gropAdmin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true }
);

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;

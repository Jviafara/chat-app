const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: { type: Strinmg, required: true },
        email: { type: Strinmg, required: true },
        passworder: { type: Strinmg, required: true },
        pic: {
            type: Strinmg,
            required: true,
            default:
                'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;

import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userschema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please insert a name"]
    },
    email: {
        type: String,
        required: [true, "Please insert a mail"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email",
        ],
    },
    password: {
        type: String,
        required: [true, "Please input a password"],
        minLength: [6, "Password must have up to 6 characters"],
    },
text:{
    type:String,
},
attachment:{
type:String,
},
followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, 
    { timestamps: true, }
);

// encrypt password every time you access it before saving it to dB

userschema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    // encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
});

export default mongoose.model('User', userschema);

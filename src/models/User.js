import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
    providerId: {type:String, unique:true, required:true},
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    profilePic: { type: String },
    coverPic: { type: String, default: "https://images6.alphacoders.com/131/1315629.png"},
    provider: { type: String },
    razrpayId:{type:String},
    razrpaySecret:{type:String},
    project:{type:String},
    projectLink:{type:String},
    projectDescription:{type:String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});


export default models.User || model('User', UserSchema);

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        requrired:true,
    },
    password:{
        type:String,
        required:true,
    },
    profileImg:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/512/1053/1053244.png",
    },
    coverImg:{
        type:String,
    },
    address:{
        type:String,
    },
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        default:null,
    },
    operatorId:{
        type:mongoose.Schema.Types.ObjectId,
        default:null,
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);
 export  default User;
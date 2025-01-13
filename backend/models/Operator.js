import mongoose from 'mongoose';

const operatorSchema = new mongoose.Schema({
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
    twitterURL:{
        type:String,
    },
    facebookURL:{
        type:String,
    },
    linkedinURL:{
        type:String,
    }
})

const Operator = mongoose.model('Operator',operatorSchema);
 export  default Operator;
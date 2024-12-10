import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
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
        // unique: true, 
    },
    password:{
        type:String,
        required:true,
    },
    profileImg:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/512/1053/1053244.png",
    },
})

const Customer = mongoose.model('Customer',customerSchema);
 export  default Customer;
import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    },
    linkedinURL:{
        type:String,
        default:"http://www.linkedin.com",
    },
    twitterUrl:{
        type:String,
        default:"http://www.twitter.com",
    },
})

const Customer = mongoose.model('Customer',customerSchema);
 export  default Customer;
import mongoose from 'mongoose';

const operatorSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    }
});

const Operator = mongoose.model('Operator',operatorSchema);
 export  default Operator;
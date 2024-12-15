import mongoose from 'mongoose';

const userFileSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Customer', required: true 
    },
    fileName: { 
        type: String, 
        required: true 
    },
    fileURL: { 
        type: String, 
        required: true 
    }, // Cloudinary URL
    uploadDate: {
         type: Date, 
         default: Date.now
    },
})

const userFiles = mongoose.model('UserFile',userFileSchema);
 export  default userFiles;
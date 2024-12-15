import { uploadOnCloudinary } from '../utils/cloudinary.js';
import userFiles from '../models/UserFiles.js';

export const fileUpload = async (req,res) =>{

    try {
        const { userId }=req.body;
        if (!req.file) {
          return res.status(400).json({ message: 'No file uploaded' });
        }

        const result = await uploadOnCloudinary(req.file.path);

           const newFile = new userFiles({
            userId: userId, 
            fileName: req.file.originalname,
            fileURL: result.url,
        });

        await newFile.save();

        res.status(201).json({
          message: 'File uploaded successfully',
          url: result.url,
        });
        
      } catch (error) {
        console.error('Error in file upload route:', error);
        res.status(500).json({ message: 'File upload failed', error });
      }
}

export const getFiles = async (req,res) =>{

  try{
    const files = await userFiles.find({ userId: req.params.userId }); 
    res.status(200).json(files);
  }catch(error){
    console.log("error in the get files",error);
    res.status(500).json({ message: 'Failed to fetch files', error });
  }
}
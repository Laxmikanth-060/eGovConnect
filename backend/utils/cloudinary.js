import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            // console.error('No local file path provided for upload.');
            return null;
        }

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        // console.log('Upload successful:', response);
        return response;

    } catch (error) {
        console.error('Cloudinary upload error:', error);
        try {
            await fs.unlink(localFilePath);
        } catch (cleanupError) {
            console.error('Error cleaning up local file:', cleanupError);
        }

        return null;
    }
};

export { uploadOnCloudinary };

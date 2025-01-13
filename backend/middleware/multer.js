import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadDir = path.resolve(process.cwd(), 'uploads');

if (!fs.existsSync(uploadDir)) {
    try {
        fs.mkdirSync(uploadDir, { recursive: true });
        console.log('Upload directory created successfully:', uploadDir);
    } catch (error) {
        console.error('Error creating upload directory:', error);
        throw error;
    }
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('Saving file to directory:', uploadDir);
        cb(null, uploadDir); // Use the dynamic path
    },
    filename: function (req, file, cb) {
        console.log("files in uplads");
        cb(null, file.originalname); // Use original name
    },
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png','image/jpg', 'application/pdf'];
    console.log("files in uplads");
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // Accept the file
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, and PDF are allowed.'));
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 100 * 1024 * 1024 }, 
    fileFilter: fileFilter,
});

export { upload };

// api/middleware/upload.js
import multer from "multer";

const storage = multer.memoryStorage(); // keeps file in memory for upload to Cloudinary

export const upload = multer({ storage });

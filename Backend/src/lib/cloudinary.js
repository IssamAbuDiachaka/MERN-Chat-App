import dotenv, { configDotenv } from "dotenv";
import { v2 as cloudinary } from 'cloudinary'

dotenv.config();

cloudinary.config({
    cloud_name:	process.env.CLOUD_NAME,
    API_key: process.env.API_KEY,
    API_secret: process.env.API_SECRET

// API environment variable	CLOUDINARY_URL=cloudinary://272848112639171:**********@dnhd2qn83
})

export default cloudinary;
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET_KEY,
});

const uploadImage = async (image) => {
    if (image) {
        try {
            const result = await cloudinary.uploader.upload(image, {
                folder: "shopsy",
            });
            return result?.secure_url
        } catch (error) {
            console.log(error);
            return error
        }
    } else {
        return 'Image not found'
    }
}

module.exports = uploadImage
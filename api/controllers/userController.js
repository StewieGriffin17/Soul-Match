import cloudinary from "../config/cloudinary.js";
import User from "../models/User.js";

export const updateProfile = async (req, res) => {
	try {
		const { name, bio, age, gender, genderPreference } = req.body;
		const updatedData = { name, bio, age, gender, genderPreference };

		if (req.file) {
			const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
			const uploadResponse = await cloudinary.uploader.upload(base64Image);
			updatedData.image = uploadResponse.secure_url;
		}

		const updatedUser = await User.findByIdAndUpdate(req.user.id, updatedData, { new: true });

		res.status(200).json({
			success: true,
			user: updatedUser,
		});
	} catch (error) {
		console.log("Error in updateProfile: ", error);
		res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};

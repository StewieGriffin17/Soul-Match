import { create } from "zustand";
import axios from "axios";

export const useUserStore = create((set) => ({
	loading: false,
	updateProfile: async (formData) => {
		set({ loading: true });
		try {
			await axios.put("/api/profile", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			alert("Profile updated!");
		} catch (error) {
			console.error("Error updating profile:", error);
			alert("Failed to update profile.");
		} finally {
			set({ loading: false });
		}
	},
}));

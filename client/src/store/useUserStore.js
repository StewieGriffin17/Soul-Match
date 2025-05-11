// useUserStore.js
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useUserStore = create((set) => ({
	loading: false,

	updateProfile: async (formData) => {
		set({ loading: true });
		try {
			const res = await axiosInstance.put("/users/update", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			toast.success("Profile updated!");
			console.log("Updated user:", res.data.user);
		} catch (error) {
			console.error("Error updating profile:", error);
			toast.error(error?.response?.data?.message || "Failed to update profile.");
		} finally {
			set({ loading: false });
		}
	},
}));

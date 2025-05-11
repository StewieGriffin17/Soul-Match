import { useRef, useState } from "react";
import { Header } from "../components/Header";
import { useAuthStore } from "../store/useAuthStore";
import { useUserStore } from "../store/useUserStore";

const ProfilePage = () => {
	const { authUser } = useAuthStore();
	const [name, setName] = useState(authUser.name || "");
	const [bio, setBio] = useState(authUser.bio || "");
	const [age, setAge] = useState(authUser.age || "");
	const [gender, setGender] = useState(authUser.gender || "");
	const [genderPreference, setGenderPreference] = useState(authUser.genderPreference || []);
	const [previewImage, setPreviewImage] = useState(authUser.image || null);

	const fileInputRef = useRef(null);

	const { loading, updateProfile } = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", name);
		formData.append("bio", bio);
		formData.append("age", age);
		formData.append("gender", gender);
		formData.append("genderPreference", JSON.stringify(genderPreference));

		if (fileInputRef.current.files[0]) {
			formData.append("image", fileInputRef.current.files[0]);
		}

		updateProfile(formData);
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewImage(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleGenderPrefChange = (option) => {
		if (genderPreference.includes(option)) {
			setGenderPreference(genderPreference.filter((g) => g !== option));
		} else {
			setGenderPreference([...genderPreference, option]);
		}
	};

	return (
		<div className='min-h-screen bg-gray-50 flex flex-col'>
			<Header />

			<div className='flex-grow flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-md'>
					<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Your Profile</h2>
				</div>

				<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
					<div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200'>
						<form onSubmit={handleSubmit} className='space-y-6'>
							{/* NAME */}
							<div>
								<label htmlFor='name' className='block text-sm font-medium text-gray-700'>
									Name
								</label>
								<input
									id='name'
									name='name'
									type='text'
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
									className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 sm:text-sm focus:ring-pink-500 focus:border-pink-500'
								/>
							</div>

							{/* AGE */}
							<div>
								<label htmlFor='age' className='block text-sm font-medium text-gray-700'>
									Age
								</label>
								<input
									id='age'
									name='age'
									type='number'
									required
									value={age}
									onChange={(e) => setAge(e.target.value)}
									className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 sm:text-sm focus:ring-pink-500 focus:border-pink-500'
								/>
							</div>

							{/* GENDER */}
							<div>
								<span className='block text-sm font-medium text-gray-700 mb-2'>Gender</span>
								<div className='flex space-x-4'>
									{["Male", "Female"].map((option) => (
										<label key={option} className='inline-flex items-center'>
											<input
												type='radio'
												name='gender'
												value={option.toLowerCase()}
												checked={gender === option.toLowerCase()}
												onChange={() => setGender(option.toLowerCase())}
												className='form-radio text-pink-600'
											/>
											<span className='ml-2'>{option}</span>
										</label>
									))}
								</div>
							</div>

							{/* GENDER PREFERENCE */}
							<div>
								<span className='block text-sm font-medium text-gray-700 mb-2'>Gender Preference</span>
								<div className='flex space-x-4'>
									{["Male", "Female", "Both"].map((option) => (
										<label key={option} className='inline-flex items-center'>
											<input
												type='checkbox'
												className='form-checkbox text-pink-600'
												checked={genderPreference.includes(option.toLowerCase())}
												onChange={() => handleGenderPrefChange(option.toLowerCase())}
											/>
											<span className='ml-2'>{option}</span>
										</label>
									))}
								</div>
							</div>

							{/* BIO */}
							<div>
								<label htmlFor='bio' className='block text-sm font-medium text-gray-700'>
									Bio
								</label>
								<textarea
									id='bio'
									name='bio'
									rows={3}
									value={bio}
									onChange={(e) => setBio(e.target.value)}
									className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 sm:text-sm focus:ring-pink-500 focus:border-pink-500'
								/>
							</div>

							{/* IMAGE UPLOAD */}
							<div>
								<label className='block text-sm font-medium text-gray-700'>Profile Image</label>
								<div className='mt-1 flex items-center'>
									<button
										type='button'
										onClick={() => fileInputRef.current.click()}
										className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:ring-pink-500 focus:outline-none'
									>
										Upload Image
									</button>
									<input
										ref={fileInputRef}
										type='file'
										accept='image/*'
										className='hidden'
										onChange={handleImageChange}
									/>
								</div>
							</div>

							{previewImage && (
								<div className='mt-4'>
									<img src={previewImage} alt='User Preview' className='w-48 h-auto object-cover rounded-md' />
								</div>
							)}

							{/* SUBMIT */}
							<button
								type='submit'
								className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
								disabled={loading}
							>
								{loading ? "Saving..." : "Save"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
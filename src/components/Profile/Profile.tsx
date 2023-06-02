import React, { useState } from 'react';

interface UserProfile {
  fullName: string;
  allergies: string;
  doctorInfo: string;
  pharmacy: string;
}

interface ProfileProps {
  onLogout: () => void;
  userEmail: string;
  profileData: UserProfile; // Add the profileData prop
}

const Profile: React.FC<ProfileProps> = ({ onLogout, userEmail, profileData }) => {
  const [fullName, setFullName] = useState(profileData.fullName);
  const [allergies, setAllergies] = useState(profileData.allergies);
  const [doctorInfo, setDoctorInfo] = useState(profileData.doctorInfo);
  const [pharmacy, setPharmacy] = useState(profileData.pharmacy);

  const handleSubmitProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProfileData: UserProfile = {
      fullName,
      allergies,
      doctorInfo,
      pharmacy,
    };
    console.log(updatedProfileData); // Do something with the updated profile data
  };

  return (
    <div>
      <h2>Welcome, {userEmail}!</h2>
      <h3>Profile</h3>
      <form onSubmit={handleSubmitProfile}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="border border-gray-300 rounded w-full py-2 px-3"
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="allergies">
            Allergies
          </label>
          <textarea
            className="border border-gray-300 rounded w-full py-2 px-3"
            id="allergies"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="doctorInfo">
            Doctor Info
          </label>
          <textarea
            className="border border-gray-300 rounded w-full py-2 px-3"
            id="doctorInfo"
            value={doctorInfo}
            onChange={(e) => setDoctorInfo(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="pharmacy">
            Pharmacy
          </label>
          <input
            className="border border-gray-300 rounded w-full py-2 px-3"
            type="text"
            id="pharmacy"
            value={pharmacy}
            onChange={(e) => setPharmacy(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          type="submit"
        >
          Save Profile
        </button>
      </form>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Profile;

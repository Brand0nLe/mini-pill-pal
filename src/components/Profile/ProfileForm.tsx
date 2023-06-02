import React, { useState } from 'react';

interface ProfileFormProps {
  onSaveProfile: (formData: any) => void;
  profileData: {
    fullName: string;
    allergies: string;
    doctorInfo: string;
    pharmacy: string;
  };
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onSaveProfile, profileData }) => {
  const [fullName, setFullName] = useState(profileData.fullName);
  const [allergies, setAllergies] = useState(profileData.allergies);
  const [doctorInfo, setDoctorInfo] = useState(profileData.doctorInfo);
  const [pharmacy, setPharmacy] = useState(profileData.pharmacy);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      fullName,
      allergies,
      doctorInfo,
      pharmacy
    };
    onSaveProfile(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="fullName">
          Full Name
        </label>
        <input
          className="border border-gray-300 rounded w-full py-2 px-3"
          type="text"
          id="fullName"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
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
          onChange={e => setAllergies(e.target.value)}
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
          onChange={e => setDoctorInfo(e.target.value)}
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
          onChange={e => setPharmacy(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        type="submit"
      >
        Save Profile
      </button>
    </form>
  );
};

export default ProfileForm;

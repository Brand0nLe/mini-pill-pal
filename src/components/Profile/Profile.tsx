import React, { useState } from 'react';
import ProfileForm from './ProfileForm';

interface ProfileProps {
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onLogout }) => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    allergies: '',
    doctorInfo: '',
    pharmacy: ''
  });

  const handleSaveProfile = (formData: any) => {
    console.log(formData);
    setProfileData(formData);
  };

  return (
    <div className="my-4">
      <h2 className="text-lg font-bold mb-2">Profile</h2>
      <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
        <ProfileForm onSaveProfile={handleSaveProfile} profileData={profileData} />
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;

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
      <ProfileForm onSaveProfile={handleSaveProfile} profileData={profileData} />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Profile;

import React, { useState } from 'react';
import ProfileForm from './ProfileForm';

const Profile: React.FC = () => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    allergies: '',
    doctorInfo: '',
    pharmacy: ''
  });

  const handleSaveProfile = (formData: any) => {
    // Handle save profile logic
    console.log(formData);
    setProfileData(formData);
  };

  return (
    <div className="my-4">
      <h2 className="text-lg font-bold mb-2">Profile</h2>
      <ProfileForm onSaveProfile={handleSaveProfile} profileData={profileData} />
    </div>
  );
};

export default Profile;

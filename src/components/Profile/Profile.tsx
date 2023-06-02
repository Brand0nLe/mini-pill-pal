import React, { useState, useEffect } from 'react';
import ProfileForm from './ProfileForm';

interface ProfileProps {
  onLogout: () => void;
  userEmail: string; 
}

interface UserProfile {
  email: string;
  profileData: {
    fullName: string;
    allergies: string;
    doctorInfo: string;
    pharmacy: string;
  };
}

const Profile: React.FC<ProfileProps> = ({ onLogout, userEmail }) => {
  const [profileData, setProfileData] = useState<UserProfile>({
    email: '',
    profileData: {
      fullName: '',
      allergies: '',
      doctorInfo: '',
      pharmacy: ''
    }
  });

  useEffect(() => {
    const storedProfiles = localStorage.getItem('profiles');
    if (storedProfiles) {
      const profiles: UserProfile[] = JSON.parse(storedProfiles);
      const userProfile = profiles.find((profile) => profile.email === userEmail);
      if (userProfile) {
        setProfileData(userProfile);
      }
    }
  }, [userEmail]);

  const handleSaveProfile = (formData: any) => {
    console.log(formData);
    const newProfileData: UserProfile = {
      email: userEmail,
      profileData: formData
    };
    setProfileData(newProfileData);

    const storedProfiles = localStorage.getItem('profiles');
    if (storedProfiles) {
      const profiles: UserProfile[] = JSON.parse(storedProfiles);
      const updatedProfiles = profiles.map((profile) =>
        profile.email === userEmail ? newProfileData : profile
      );
      localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    }
  };

  return (
    <div className="my-4">
      <h2 className="text-lg font-bold mb-2">Profile</h2>
      <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
        <ProfileForm onSaveProfile={handleSaveProfile} profileData={profileData.profileData} />
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;

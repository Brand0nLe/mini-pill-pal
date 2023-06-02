import React, { useState } from 'react';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Profile from '../Profile/Profile';
import MedicationForm from '../MedicationForm/MedicationForm';
import RefillTracker from '../RefillTracker/RefillTracker';

interface Medication {
  name: string;
  strength: string;
  directions: string;
}

interface UserProfile {
  fullName: string;
  allergies: string;
  doctorInfo: string;
  pharmacy: string;
}

const Home: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [medicationList, setMedicationList] = useState<Medication[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleLogin = (email: string, password: string) => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      setLoggedIn(true);

      const storedProfileData = localStorage.getItem('profileData');
      if (storedProfileData) {
        const profileData: UserProfile = JSON.parse(storedProfileData);
        setUserProfile(profileData);
      }
    } else {
      alert('Invalid email or password.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserProfile(null);
  };

  const handleRegistration = (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    const fullName = `${firstName} ${lastName}`;
    const profileData: UserProfile = {
      fullName,
      allergies: '',
      doctorInfo: '',
      pharmacy: ''
    };

    localStorage.setItem('profileData', JSON.stringify(profileData));

    setLoggedIn(true);
    setUserProfile(profileData);
  };

  const handleAddMedication = (medication: Medication) => {
    setMedicationList([...medicationList, medication]);
  };

  return (
    <div>
      {loggedIn ? (
        <>
          {userProfile && (
            <Profile
              onLogout={handleLogout}
              userEmail={userProfile.fullName}
              profileData={userProfile}
            />
          )}
          <MedicationForm onAddMedication={handleAddMedication} />
          <RefillTracker medicationList={medicationList} />
        </>
      ) : (
        <>
          <Login onLogin={handleLogin} onRegistrationSuccess={() => { }} />
          <Registration onRegistration={handleRegistration} onLoginSuccess={() => { }} />
        </>
      )}
    </div>
  );
};

export default Home;

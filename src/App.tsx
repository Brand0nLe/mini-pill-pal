import React, { useState } from 'react';
import Profile from './components/Profile/Profile';
import MedicationForm from './components/MedicationForm/MedicationForm';
import RefillTracker from './components/RefillTracker/RefillTracker';
import Login from './components/Login/Login';

interface Medication {
  name: string;
  strength: string;
  directions: string;
}

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [medicationList, setMedicationList] = useState<Medication[]>([]);

  const handleLogin = (email: string, password: string) => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      setLoggedIn(true);
    } else {
      alert("Invalid email or password."); 
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleAddMedication = (medication: Medication) => {
    setMedicationList([...medicationList, medication]);
  };

  const userEmail = localStorage.getItem('email') || ''; 

  return (
    <div>
      {loggedIn ? (
        <>
          <Profile onLogout={handleLogout} userEmail={userEmail} />
          <MedicationForm onAddMedication={handleAddMedication} />
          <RefillTracker medicationList={medicationList} />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;

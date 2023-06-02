import React from 'react';
import Profile from './components/Profile/Profile';
import MedicationForm from './components/MedicationForm/MedicationForm';
import RefillTracker from './components/RefillTracker/RefillTracker';
import Login from './components/Login/Login';

const App: React.FC = () => {
  return (
    <div>
      {/* Render the components based on authentication */}
      {true ? (
        <>
          <Profile />
          <MedicationForm />
          <RefillTracker />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;

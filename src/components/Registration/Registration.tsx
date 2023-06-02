import React, { useState } from 'react';
import './Registration.css';
import RegistrationForm from './RegistrationForm';

const Registration: React.FC = () => {
  const [registered, setRegistered] = useState(false);

  const handleRegistration = () => {
    setRegistered(true);
  };

  return (
    <div className="registration-container">
      {registered ? (
        <div>
          <h2 className="registration-success">Registration Successful!</h2>
          <p className="registration-message">
            You have successfully registered an account. Please proceed to login.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="registration-heading">Registration</h2>
          <RegistrationForm onRegistration={handleRegistration} />
        </div>
      )}
    </div>
  );
};

export default Registration;

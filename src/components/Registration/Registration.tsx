import React, { useState } from 'react';
import './Registration.css';
import RegistrationForm from './RegistrationForm';

const Registration: React.FC<{ onRegistrationSuccess: () => void }> = ({ onRegistrationSuccess }) => {
  const [registered, setRegistered] = useState(false);

  const handleRegistration = () => {
    setRegistered(true);
    onRegistrationSuccess();
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
            <h2 className="text-lg font-bold mb-2">Registration</h2>
          <RegistrationForm onRegistration={handleRegistration} />
          <p className="text-sm">
            Already have an account?{' '}
            <button className="link-button" onClick={onRegistrationSuccess}>
              Go back to Login
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Registration;

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Registration from '../Registration/Registration';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleToggleRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <div className="my-4">
      <div>
        <h2 className="text-lg font-bold mb-2">Login</h2>
        <LoginForm onLogin={onLogin} />
        <p className="text-sm">
          Don't have an account?{' '}
          <button className="link-button" onClick={handleToggleRegistration}>
            Register here
          </button>
        </p>
        {showRegistration && <Registration />}
      </div>
    </div>
  );
};

export default Login;

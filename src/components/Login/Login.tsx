import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Login: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // Handle login logic
    console.log('Logged in:', email);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log('Logged out');
    setLoggedIn(false);
  };

  return (
    <div className="my-4">
      {loggedIn ? (
        <div>
          <h2 className="text-lg font-bold mb-2">Welcome, User!</h2>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-bold mb-2">Login</h2>
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default Login;

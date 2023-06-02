import React from 'react';
import LoginForm from './LoginForm';

const Login: React.FC = () => {
  const handleLogin = (formData: any) => {
    // Handle login logic
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 shadow-md rounded">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;


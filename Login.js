import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LOCAL_STORAGE_USER_KEY = "needsmet_users";

function findUser(id, pin) {
  const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY) || "[]");
  return users.find((u) => u.id === id && u.pin === pin);
}

const Login = () => {
  const [userId, setUserId] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    if (!userId.trim() || !pin.trim()) {
      setError("Please enter your User ID and PIN.");
      return;
    }
    if (findUser(userId.trim(), pin.trim())) {
      navigate('/home');
    } else {
      setError("Invalid User ID or PIN.");
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-36px)]">
      <div className="flex-grow flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-center px-6 py-16">
          <div className="w-full max-w-sm">
            <div className="flex items-center justify-center mb-10">
              <img 
                src="/lovable-uploads/2ca86bdc-2f22-4d7b-9f87-d8e870a612d5.png" 
                alt="NeedsMet Logo" 
                className="w-36 h-36 object-contain"
              />
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <Input 
                type="text" 
                placeholder="USER ID" 
                value={userId}
                onChange={e => setUserId(e.target.value)}
                required
              />
              <Input 
                type="password" 
                placeholder="PIN" 
                value={pin}
                onChange={e => setPin(e.target.value)}
                required
                minLength={4}
                maxLength={4}
              />
              <Button type="submit" variant="blue" size="full">
                LOGIN
              </Button>
              {error && <p className="text-sm text-red-500 text-center mt-2">{error}</p>}
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">Don't have an account?</p>
              <Link to="/signup" className="text-blue-600 font-medium">
                Create one
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

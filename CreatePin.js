import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LOCAL_STORAGE_USER_KEY = "needsmet_users";

function saveUser(user) {
  const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY) || "[]");
  users.push(user);
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(users));
}

const CreatePin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // This must be passed in from SignUp page
  const userData = location.state;

  const [pin, setPin] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  if (!userData) {
    // If the user manually visits this page, redirect to signup
    navigate("/signup");
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!pin || pin.length !== 4) {
      setError("PIN must be 4 digits.");
      return;
    }

    // Save user with PIN
    saveUser({
      ...userData,
      pin,
    });
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-36px)] px-6">
        <div className="bg-white p-8 rounded shadow text-center space-y-4 mt-24 max-w-xs">
          <h2 className="text-lg font-bold text-green-700">Account Created!</h2>
          <p className="text-md">Your User ID is:</p>
          <p className="text-2xl font-mono bg-gray-100 px-4 py-2 rounded text-blue-700">{userData.id}</p>
          <p className="text-sm text-gray-600">Please save your User ID and PIN for future login.</p>
          <Button variant="black" size="full" onClick={() => navigate("/login")}>Go to Login</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-36px)] px-4">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded shadow text-center space-y-4 max-w-xs w-full">
          <h2 className="text-lg font-bold text-blue-800 mb-3">Set Your PIN</h2>
          <p className="text-md text-gray-700">
            User ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{userData.id}</span>
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input 
              type="password" 
              placeholder="PIN (4 digits)" 
              minLength={4}
              maxLength={4}
              inputMode="numeric"
              value={pin}
              onChange={e => setPin(e.target.value)}
              required 
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button type="submit" variant="red" size="full">Set PIN & Complete Sign Up</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePin;

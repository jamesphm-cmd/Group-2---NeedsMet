import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LOCAL_STORAGE_USER_KEY = "needsmet_users";
const LOCAL_STORAGE_USER_COUNT = "needsmet_user_count";

function getUserCount() {
  return parseInt(localStorage.getItem(LOCAL_STORAGE_USER_COUNT) || "0", 10);
}

function setUserCount(count) {
  localStorage.setItem(LOCAL_STORAGE_USER_COUNT, count.toString());
}

const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [room, setRoom] = useState("");
  const [phone, setPhone] = useState("");
  const [studentNum, setStudentNum] = useState("");
  const [assignedUserId, setAssignedUserId] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!name || !surname || !room || !phone || !studentNum) {
      setError("Please fill in all fields.");
      return;
    }

    const count = getUserCount() + 1;
    const generatedId = `${room}${count}`;
    setAssignedUserId(generatedId);
    setUserCount(count);

    // Save the user data (except PIN, which will be set on CreatePin page)
    // Pass along data via navigation
    navigate('/create-pin', {
      state: {
        id: generatedId,
        name,
        surname,
        room,
        phone,
        studentNum,
      }
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-36px)] px-6 py-8 space-y-6">
      <div className="flex-grow flex flex-col justify-center">
        <div className="w-full max-w-sm mx-auto">
          <div className="relative h-40 mb-6 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/9ae07786-2afd-458a-9e4d-470f6f9aafd5.png" 
              alt="Students shopping" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
            <Input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
            <Input type="text" placeholder="Surname" value={surname} onChange={e => setSurname(e.target.value)} required />
            <Input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} required />
            <Input type="text" placeholder="Room Number" value={room} onChange={e => setRoom(e.target.value)} required />
            <Input type="text" placeholder="Student Number" value={studentNum} onChange={e => setStudentNum(e.target.value)} required />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button type="submit" variant="red" size="full">Continue</Button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-gray-600 text-sm mr-2">Already have an account?</span>
            <Link to="/login" className="text-blue-600 font-medium">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

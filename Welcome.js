import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Welcome = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-36px)]">
      <div className="bg-white p-6 text-center">
        <h1 className="text-2xl font-bold">WELCOME TO NEEDSMET</h1>
      </div>
      
      <div className="flex-grow flex flex-col justify-between">
        <div className="bg-blue-600 flex-grow flex flex-col items-center justify-center text-white p-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-1">NeedsMet</h2>
            <p className="text-lg">Helping students help each other</p>
          </div>
        </div>
        
        <div className="bg-white p-6 text-center">
          <p className="text-sm text-gray-800 mb-6">
            Needsmet is a mobile application designed to assist hostel students in acquiring essential items from nearby stores. Needsmet bridges this gap by allowing students who are available to shop to fulfill requests for a small delivery fee.
          </p>
          
          <Link to="/signup">
            <Button variant="red" size="full" className="mb-4">
              GET STARTED
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

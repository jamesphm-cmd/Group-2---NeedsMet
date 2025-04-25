import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/navbar';
import { ChevronLeft, User, Star } from 'lucide-react';

const RequestDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Mock data for the request
  const request = {
    id,
    userId: 'USER 1',
    rating: 5,
    items: [
      'Bread - 2 loaves',
      'Milk - 1 liter',
      'Eggs - 1 dozen',
      'Toilet paper - 1 pack'
    ],
    totalCost: '25.99',
    timestamp: '2023-04-18T14:30:00Z'
  };
  
  const handleAccept = () => {
    // In a real app, update the request status in the backend
    navigate('/home');
  };
  
  const handleDecline = () => {
    navigate('/requests');
  };
  
  return (
    <div className="flex flex-col min-h-[calc(100vh-36px)]">
      <header className="px-4 py-3 border-b flex items-center">
        <button className="mr-4" onClick={() => navigate(-1)}>
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">REQUEST DETAILS</h1>
      </header>
      
      <div className="flex-grow p-6">
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <div className="flex items-center mb-2">
            <User size={20} className="mr-2" />
            <span className="font-medium">{request.userId}</span>
          </div>
          <div className="mb-2">
            <div className="text-sm">RATINGS</div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i < request.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"} 
                />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-medium mb-2">Items:</h3>
            <ul className="list-disc pl-5">
              {request.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-medium">Total Cost:</h3>
            <p>P{request.totalCost}</p>
          </div>
        </div>
        
        <div className="space-y-4 mt-auto">
          <Button 
            variant="black" 
            size="full"
            onClick={handleAccept}
          >
            ACCEPT REQUEST
          </Button>
          
          <Button 
            variant="red" 
            size="full"
            onClick={handleDecline}
          >
            DECLINE
          </Button>
        </div>
      </div>
      
      <Navbar />
    </div>
  );
};

export default RequestDetails;

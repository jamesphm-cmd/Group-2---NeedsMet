import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/navbar';
import { Menu } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-[calc(100vh-36px)]">
      <header className="px-4 py-3 border-b flex items-center">
        <button className="mr-4">
          <Menu size={24} />
        </button>
      </header>
      
      <div className="flex-grow flex flex-col items-center justify-center p-6 space-y-12">
        <Button 
          variant="red" 
          size="full"
          onClick={() => navigate('/create-request')}
        >
          POST YOUR REQUEST
        </Button>
        
        <Button 
          variant="black" 
          size="full"
          onClick={() => navigate('/requests')}
        >
          SEE REQUESTS
        </Button>
      </div>
      
      <Navbar />
    </div>
  );
};

export default HomePage;

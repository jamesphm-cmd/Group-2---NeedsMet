import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/ui/navbar';
import { ChevronLeft } from 'lucide-react';

const CreateRequest = () => {
  const navigate = useNavigate();
  const [itemsList, setItemsList] = useState('');
  const [totalCost, setTotalCost] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, submit the request to the backend
    navigate('/home');
  };
  
  return (
    <div className="flex flex-col min-h-[calc(100vh-36px)]">
      <header className="px-4 py-3 border-b flex items-center">
        <button className="mr-4" onClick={() => navigate(-1)}>
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">POST YOUR REQUEST</h1>
      </header>
      
      <div className="flex-grow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">ENTER LIST</label>
            <Textarea 
              placeholder="Enter items you need..." 
              className="h-32 bg-gray-100"
              value={itemsList}
              onChange={(e) => setItemsList(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">TOTAL COSTS</label>
            <Input 
              type="number" 
              placeholder="0.00" 
              className="border-gray-300"
              value={totalCost}
              onChange={(e) => setTotalCost(e.target.value)}
              required
            />
          </div>
          
          <div className="pt-6">
            <Button type="submit" variant="red" size="full">
              SUBMIT REQUEST
            </Button>
          </div>
        </form>
      </div>
      
      <Navbar />
    </div>
  );
};

export default CreateRequest;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/ui/navbar';
import { ChevronLeft, Star, User } from 'lucide-react';

const ShopperCard = ({ userId, rating, onClick }) => {
  return (
    <div 
      className="bg-gray-200 p-4 mb-4 rounded-md"
      onClick={onClick}
    >
      <div className="flex items-center">
        <User size={20} className="mr-2" />
        <span className="font-medium">{userId}</span>
      </div>
      <div className="mt-1">
        <div className="text-sm">RATINGS</div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ShoppersList = () => {
  const navigate = useNavigate();
  
  const shoppers = [
    { id: '1', userId: 'USER 1', rating: 5 },
    { id: '2', userId: 'USER 2', rating: 4 },
    { id: '3', userId: 'USER 3', rating: 3 },
    { id: '4', userId: 'USER 4', rating: 5 },
  ];
  
  return (
    <div className="flex flex-col min-h-[calc(100vh-36px)]">
      <header className="px-4 py-3 border-b flex items-center">
        <button className="mr-4" onClick={() => navigate(-1)}>
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">AVAILABLE SHOPPERS</h1>
      </header>
      
      <div className="flex-grow p-4">
        {shoppers.map((shopper) => (
          <ShopperCard 
            key={shopper.id}
            userId={shopper.userId}
            rating={shopper.rating}
            onClick={() => navigate(`/shopper/${shopper.id}`)}
          />
        ))}
      </div>
      
      <Navbar />
    </div>
  );
};

export default ShoppersList;

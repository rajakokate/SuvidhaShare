import React, { useState } from "react";
import { useEffect } from "react";
import { Search, FileQuestion, User, LogOut, Settings, Truck, ClipboardList, Gift, ScrollText, LayoutDashboard, Store, MapPinHouse, MessageCircleMore } from 'lucide-react';
import Logo from '../assets/suvidhasharelogo.png';
import axios from "axios";

export default function AllFoodLists() {
    const [foodData, setFoodData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/food/add',);
                setFoodData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []); 

    
    const foodItems = foodData.map((item, index) => (
        <div className="bg-green-900 text-white p-6 rounded-lg flex items-center gap-4"
            key={index} >
            <Truck />
            <div>
                <h3 className="text-2xl">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
                <p className="text-lg">{item.quantity}</p>
                <p className="text-lg">{item.location}</p>
                <p>{item.timestamps ? 'Available' : 'Not Available'}</p>
            </div>
        </div>
    ));


  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-5xl font-bold text-green-900">All Food Lists</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input type="text" placeholder="Search Food" className="pl-8 pr-4 py-1 border rounded-md" />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2" size={16} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6"> {foodItems} </div>

       </div>


      
    </div>
  );
}
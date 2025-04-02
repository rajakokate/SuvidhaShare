import React, { useState } from "react";
import axios from "axios";

const AddFood = () => {
  const [addFood, setAddfood] = useState({
    title: "",
    description: "",
    quantity: "", 
    expiryTime: "",
    timePeriod: "AM",
    address: "",
    });

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
      setAddfood({ ...addFood, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
     try {
          
          const response = await axios.post("/food/add", addFood);
          
          setSuccess(response.data.message);
          setFormData({ title: "",
            description: "",
            quantity: "", 
            expiryTime: "",
            timePeriod: "AM",
            address: "", });
        } catch (err) {
          setError(err.response?.data?.error || "Something went wrong!");
          setSuccess("");
        }
      };

  return (
    <>
  
  <form onSubmit={handleSubmit} className="space-y-4">
      <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
        <div className="bg-green-800 p-10 rounded-2xl shadow-xl w-full max-w-3xl">
          <h2 className="text-4xl font-bold text-center text-black mb-8">ADD FOOD</h2>
          {success && <div className="text-green-500 mb-4">{success}</div>}
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="space-y-4">
            {/* Food Name */}
            <div>
              <label className="block text-black font-semibold mb-1 text-lg">Food Name</label>
              <input
                type="text"
                name="title"
                placeholder="Enter food name"
                className="w-full p-3 rounded-xl bg-gray-200 border-none focus:ring-2 focus:ring-green-500 text-lg"
                value={addFood.title}
                onChange={handleChange}
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-black font-semibold mb-1 text-lg">Description</label>
              <textarea
                rows="4"
                 name="description"
                placeholder="Enter food description..."
                className="w-full p-3 rounded-xl bg-gray-200 border-none focus:ring-2 focus:ring-green-500 text-lg resize-none"
                value={addFood.description}
                onChange={handleChange}
                required
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-black font-semibold mb-1 text-lg">Quantity</label>
              <input 
                type="number" 
                name="quantity"
                placeholder="Enter quantity" 
                className="w-full p-3 rounded-xl bg-gray-200 border-none focus:ring-2 focus:ring-green-500 text-lg" 
                value={addFood.quantity}
                onChange={handleChange}
                required
              />
            </div>

            {/* Pickup Time */}
            <div>
              <label className="block text-black font-semibold mb-1 text-lg">Pick-Up Time</label>
              <div className="flex">
                <input 
                  type="time" 
                   name="expiryTime"
                  className="w-full p-3 rounded-l-xl bg-gray-200 border-none focus:ring-2 focus:ring-green-500 text-lg" 
                  value={addFood.expiryTime}
                  onChange={handleChange}
                  required
                />
                <select 
                  className="p-3 rounded-r-xl bg-gray-200 border-none focus:ring-2 focus:ring-green-500 text-lg" 
                  name="timePeriod"
                  value={addFood.timePeriod}
                  onChange={handleChange}
                  required
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-black font-semibold mb-1 text-lg">Location</label>
              <input
                type="text"
                name="address"
                placeholder="Enter pickup location"
                className="w-full p-3 rounded-xl bg-gray-200 border-none focus:ring-2 focus:ring-green-500 text-lg"
                value={addFood.address}
                onChange={handleChange}
                required              
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button 
            type="submit"
             className="bg-yellow-500 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition duration-300">
              ADD FOOD
            </button>
          </div>
        </div>
      </div>
      </form>
    </>
  );
};

export default AddFood;

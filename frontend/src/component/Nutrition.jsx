import React from 'react';
import Background from '../assets/food.png';
import dish from '../assets/dish.png';
import group from '../assets/group.png';

const Nutrition = () => {
  return (
    <div  className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
       backgroundImage: `url("${Background}")`
      }}
    >
      <h1 className="text-white text-5xl font-bold mb-12">
        Nourishing Communities, One Meal at a Time
      </h1>
      <div className="flex justify-around w-full max-w-7xl p-2 text-white font-bold">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
          <img src={group} alt="Rescued Meals" style={{ width: '64px', height: '64px' }} />
          </div>
          <h2 className="text-4xl font-bold mb-6">Rescued Meals</h2> 
          <p className="text-3xl font-bold">Fresh, surplus food shared with those in need</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
          <img src={group} alt="Rescued Meals" style={{ width: '64px', height: '64px' }} />
          </div>
          <h2 className="text-4xl font-bold mb-6">Community Dining</h2>
          <p className="text-3xl font-bold">Everyone deserves a warm meal join us in sharing</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <img src={group} alt="Rescued Meals" style={{ width: '64px', height: '64px' }} />
          </div>
          <h2 className="text-4xl font-bold mb-6">Save Surplus</h2>
          <p className="text-3xl font-bold">Partnering with food businesses to reduce waste</p>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;

import React from 'react';

const Juicecard = ({ image, timestamp, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img src={image} alt="Card Image" className="w-full" />
      <div className="px-4 py-2">
        <div className="font-bold text-xl nb-2">{timestamp}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Juicecard;
import React from 'react';

const RatingComponent = ({ starImage, ratingText, personImage, personName, personLocation }) => {
  return (
    <div className="flex flex-col p-8 mr-8">
      <img
        src={starImage}
        alt="Rating"
        className="h-3 w-20"
      />
      <p className="text-2xl italic text-[#152F2E] mt-2">
        {ratingText}
      </p>
      <div className="flex md:w-1/2">
        <div>
          <img
            src={personImage}
            alt="Person"
            className="w-50 h-50 mt-4"
          />
        </div>
        <div className="p-4">
          <span className="text-xs">{personName}</span>
          <span>{personLocation}</span>
        </div>
      </div>
    </div>
  );
};

export default RatingComponent;

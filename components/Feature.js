import React from "react";

const Feature = ({ imageSrc, featureName, featureText }) => {
  return (
    <div className="flex flex-col items-start md:w-1/3 p-8 md:p-4">
      <div className="flex justify-center">
        <img src={imageSrc} alt={featureName} />
      </div>
      <h2 className="text-xl font-bold mt-4 mb-2 text-left">{featureName}</h2>
      <p className="text-lg text-gray-600 text-left w-2/3">{featureText}</p>
    </div>
  );
};

export default Feature;

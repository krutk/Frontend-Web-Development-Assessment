import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center mb-8 sm:px-20">
      <div className="flex flex-col items-start w-full md:w-1/2 p-8 md:p-4">
        <img
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_10cs0b400000000000001o.jpg"
          alt="about"
        />
      </div>
      <div className="flex flex-col items-start w-full md:w-1/2 p-8 md:p-4">
        <span className="text-xs tracking-[2px] font-bold text-[#00C2C5]">
          ABOUT
        </span>
        <span className="text-4xl leading-normal font-semibold w-2/3 font-sans text-[#152F2E] mb-5">
          Some more information about your business
        </span>
        <span className="text-base leading-6 font-normal font-muli text-[#152F2E]">
          Share a little about yourself as a business owner, or maybe describe
          what makes your service unique. Give visitors one more reason to care
          about your offer and want to work with you.
        </span>
      </div>
    </div>
  );
};

export default AboutSection;

import React from "react";
import Rating from "./Rating";

const RatingSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 sm:px-20">
      <div className="w-full md:w-1/2 p-8 text-center">
        <span className="text-xs tracking-[2px] font-bold text-[#00C2C5]">
          DON&apos;T JUST TAKE OUR WORD FOR IT
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-center mb-8">
        <Rating
          starImage="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/dfb61e74-multor-testimonial1-stars.svg"
          ratingText="Share a real testimonial that hits some of your benefits (but isn&apos;t too sales-y)."
          personImage="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/52bdc545-multor-testimonial1-headshot_101e01e00000000000001o.jpg"
          personName="John Wick"
          personLocation="Location"
        />
        <Rating
          starImage="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/6d441dac-multor-testimonial2-stars.svg"
          ratingText="Include someone talking about how easy it was to sign up and participate."
          personImage="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/94045dbc-multor-testimonial2-headshot_101e01e00000000000001o.jpg"
          personName="John Wick"
          personLocation="Location"
        />
      </div>
    </div>
  );
};

export default RatingSection;

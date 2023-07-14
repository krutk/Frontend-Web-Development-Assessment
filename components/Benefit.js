import React from "react";

const Benefit = ({ iconSrc, title, description }) => {
  return (
    <div className="flex flex-row items-left mt-4">
      <div>
        <img src={iconSrc} alt="" className="h-10 w-10 md:h-auto md:w-auto" />
      </div>
      <div className="ml-8">
        <span className="text-base leading-none font-semibold font-work-sans text-[#152F2E]">
          {title}
        </span>
        <p className="text-left">
          <span className="text-base leading-[22px] font-normal font-work-sans text-[#152F2E]">
            {description}
          </span>
        </p>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className="w-full md:w-1/2 ">
      <div className="flex flex-col px-8 md:py-20">
        <Benefit
          iconSrc="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/13b0f11a-multor-benefit1-icon.svg"
          title="Benefit 1"
          description="Highlight the benefits of signing up for an appointment, online class, or video consultation."
        />
        <Benefit
          iconSrc="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/8ab92ea8-multor-benefit2-icon.svg"
          title="Benefit 2"
          description="For example, fitness instructors might describe how their routines make people healthier *and* happier."
        />
        <Benefit
          iconSrc="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/c32dd90d-multor-benefit3-icon.svg"
          title="Benefit 3"
          description="Remind visitors how easy it is to claim your offer and start enjoying the benefits."
        />
      </div>
    </div>
  );
};

export default Benefits;

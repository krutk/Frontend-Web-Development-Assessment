import RatingComponent from "../components/RatingComponent";
import Feature from "../components/Feature";

export default function Home() {
  return (
    <div className="bg-white">
      <div
        className="bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
        }}
      >
        <div className="w-full md:w-2/3 md:h-full p-8 sm:p-20 sm:pt-40 bg-gradient-to-r from-white to-transparent bg-opacity-70">
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg"
            alt="Logo"
            className="h-8 w-40 mr-2 mb-20"
          />
          <span className="text-6xl leading-tight font-semibold font-work-sans tracking-tighter text-[#152F2E]">
            Describe the value of booking an appointment
          </span>

          <p className="text-left  mt-8">
            <span className="text-[20px] leading-[28px] font-normal font-work-sans text-[#152F2E]">
              No need to get clever. Tell people exactly what you're offering,
              then use this space to communicate your key value proposition.
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row sm:px-20 bg-white">
        <div className="w-full md:w-1/2 p-8">
          <div className="flex flex-col md:py-20">
            <div className="flex flex-row items-left">
              <div>
                <img
                  src="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/13b0f11a-multor-benefit1-icon.svg"
                  alt=""
                  className="h-10 w-10 md:h-auto md:w-auto"
                />
              </div>
              <div className="ml-8">
                <span className="text-base leading-none font-semibold font-work-sans text-[#152F2E]">
                  Benefit 1
                </span>
                <p className="text-left">
                  <span className="text-base leading-[22px] font-normal font-work-sans text-[#152F2E]">
                    Highlight the benefits of signing up for an appointment,
                    online class, or video consultation.
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-row items-left mt-4">
              <div>
                <img
                  src="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/8ab92ea8-multor-benefit2-icon.svg"
                  alt=""
                  className="h-10 w-10 md:h-auto md:w-auto"
                />
              </div>
              <div className="ml-8">
                <span className="text-base leading-none font-semibold font-work-sans text-[#152F2E]">
                  Benefit 2
                </span>
                <p className="text-left">
                  <span className="text-base leading-[22px] font-normal font-work-sans text-[#152F2E]">
                    For example, fitness instructors might describe how their
                    routines make people healthier *and* happier.
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-row items-left mt-4">
              <div>
                <img
                  src="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/c32dd90d-multor-benefit3-icon.svg"
                  alt=""
                  className="h-10 w-10 md:h-auto md:w-auto"
                />
              </div>
              <div className="ml-8">
                <span className="text-base leading-none font-semibold font-work-sans text-[#152F2E]">
                  Benefit 3
                </span>
                <p className="text-left">
                  <span className="text-base leading-[22px] font-normal font-work-sans text-[#152F2E]">
                    Remind visitors how easy it is to claim your offer and start
                    enjoying the benefits.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[400px] form-component bg-[#152F2E] p-8 md:p-4">
          <form className="component">
            <h3 className="text-center leading-[22px]">
              <span className="text-[32px] leading-none font-semibold font-work-sans text-white">
                Schedule an Appointment
              </span>
            </h3>
            <p className="text-center mt-6">
              <span className="text-[15px] leading-[22px] font-normal font-muli text-white">
                Here, let visitors know what will happen when they complete your
                form.
              </span>
            </p>

            <div className="mb-4">
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full border-gray-300 border p-2 rounded"
                placeholder="First Name*"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full border-gray-300 border p-2 rounded"
                placeholder="Last Name*"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-gray-300 border p-2 rounded"
                placeholder="Email*"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full border-gray-300 border p-2 rounded"
                placeholder="Phone Number*"
                required
              />
            </div>
            <div className="mb-4">
              <select
                id="type_of_appointment"
                name="type_of_appointment"
                className="w-full border-gray-300 border p-2 rounded"
                required
              >
                <option value="">Type of Appointment</option>
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
                <option value="Type 3">Type 3</option>
              </select>
            </div>
            <button
              className=" w-full bold bg-[#00C2C5] text-white px-4 py-2 rounded"
              type="submit"
            >
              <span>SCHEDULE NOW</span>
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-16">
        <div className="w-full md:w-1/2 p-8 md:p-4">
          <h2 className="text-center leading-10 md:leading-[42px]">
            <span className="text-[48px] leading-none font-semibold font-work-sans text-[#152F2E]">
              Show visitors what they're signing up for
            </span>
          </h2>

          <p className="text-center text-[18px] leading-8 md:text-lg md:leading-10 font-normal font-muli text-[#152F2E]">
            Include a video or photo from one of your sessions to help people
            understand your service (or just to hype ‘em up).
          </p>

          <div className="custom-iframe-container">
            <iframe
              className="custom-iframe"
              src="https://cdn.coverr.co/videos/coverr-focused-worker-working-on-a-laptop-6221/1080p.mp4"
              title="Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-16 sm:px-20">
        <div className="w-full md:w-1/2 p-8 text-center">
          <span className="text-xs tracking-[2px] font-bold text-[#00C2C5]">
            DON'T JUST TAKE OUR WORD FOR IT
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-center mb-8">
          <RatingComponent
            starImage="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/dfb61e74-multor-testimonial1-stars.svg"
            ratingText="Share a real testimonial that hits some of your benefits (but isn't too sales-y)."
            personImage="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/52bdc545-multor-testimonial1-headshot_101e01e00000000000001o.jpg"
            personName="John Wick"
            personLocation="Location"
          />
          <RatingComponent
            starImage="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/6d441dac-multor-testimonial2-stars.svg"
            ratingText="Include someone talking about how easy it was to sign up and participate."
            personImage="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/94045dbc-multor-testimonial2-headshot_101e01e00000000000001o.jpg"
            personName="John Wick"
            personLocation="Location"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center mb-8 sm:px-20">
        <Feature
          imageSrc="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/53ad3716-multor-feature1-image_108c04p00000000000001o.jpg"
          featureName="Feature 1"
          featureText="Talk about some of the details of your offer with a focus on the value people get back."
        />
        <Feature
          imageSrc="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/adf66a57-multor-feature2-image_108c04p00000000000001o.jpg"
          featureName="Feature 2"
          featureText="Is there a pain point that your service resolves? Tell visitors about it here."
        />
        <Feature
          imageSrc="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/6d486c61-multor-feature3-image_108c04p00000000000001o.jpg"
          featureName="Feature 3"
          featureText="Alternatively, you could use this section to address some frequently asked questions."
        />
      </div>
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
            what makes your service unique. Give visitors one more reason to
            care about your offer and want to work with you.
          </span>
        </div>
      </div>
      <footer className="bg-[#152F2E] py-8 sm:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <img
            src="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg"
            alt=""
            data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg"
            data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg"
            className="h-8 w-40"
          />
          <p className="text-right">
            <span
              style={{
                fontSize: "12px",
                lineHeight: "20px",
                fontFamily: "Muli",
                color: "rgb(162, 172, 172)",
                fontStyle: "normal",
                fontWeight: "400",
              }}
            >
              © 2020 Insert Name Here. All rights reserved.
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

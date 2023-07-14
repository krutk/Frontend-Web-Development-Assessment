import RatingComponent from "../components/RatingComponent";
import Benefits from "../components/Benefit";
import FormComponent from "../components/FormComponent";
import Footer from "../components/Footer";
import About from "../components/About";
import FeatureComponent from "../components/FeatureComponent";

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
              No need to get clever. Tell people exactly what you&apos;re offering,
              then use this space to communicate your key value proposition.
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row sm:px-20 bg-white">
        <Benefits />
        <FormComponent />
      </div>
      <div className="flex flex-col items-center justify-center py-16">
        <div className="w-full md:w-1/2 p-8 md:p-4">
          <h2 className="text-center leading-10 md:leading-[42px]">
            <span className="text-[48px] leading-none font-semibold font-work-sans text-[#152F2E]">
              Show visitors what they&apos;re signing up for
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
      <RatingComponent />
      <FeatureComponent />
      <About />
      <Footer />
    </div>
  );
}

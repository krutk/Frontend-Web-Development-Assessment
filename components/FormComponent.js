import React from "react";

const FormComponent = () => {
  return (
    <div className="w-full md:w-[400px] form-component bg-[#152F2E] p-8 md:p-4">
      <form className="component">
        <h3 className="text-center leading-[22px]">
          <span className="text-[32px] leading-none font-semibold font-work-sans text-white">
            Schedule an Appointment
          </span>
        </h3>
        <p className="text-center mt-6">
          <span className="text-[15px] leading-[22px] font-normal font-muli text-white">
            Here, let visitors know what will happen when they complete your form.
          </span>
        </p>

        <input
          type="text"
          id="firstName"
          name="firstName"
          className="w-full border-gray-300 border p-2 rounded mb-4"
          placeholder="First Name*"
          required
        />

        <input
          type="text"
          id="lastName"
          name="lastName"
          className="w-full border-gray-300 border p-2 rounded mb-4"
          placeholder="Last Name*"
          required
        />

        <input
          type="email"
          id="email"
          name="email"
          className="w-full border-gray-300 border p-2 rounded mb-4"
          placeholder="Email*"
          required
        />

        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          className="w-full border-gray-300 border p-2 rounded mb-4"
          placeholder="Phone Number*"
          required
        />

        <select
          id="type_of_appointment"
          name="type_of_appointment"
          className="w-full border-gray-300 border p-2 rounded mb-4"
          required
        >
          <option value="">Type of Appointment</option>
          <option value="Type 1">Type 1</option>
          <option value="Type 2">Type 2</option>
          <option value="Type 3">Type 3</option>
        </select>

        <button
          className="w-full bold bg-[#00C2C5] text-white px-4 py-2 rounded"
          type="submit"
        >
          <span>SCHEDULE NOW</span>
        </button>
      </form>
    </div>
  );
};

export default FormComponent;

import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="my-3">
        <h1 className="text-3xl font-bold">Good Afternoon, Hazar.</h1>
        <h2 className="text-3xl font-bold text-gray-300">
          Be so good no one can ignore you
        </h2>
      </div>
      <div className="flex flex-row gap-5 my-10">
        <div className="text-center">
          <span className="block font-bold text-gray-500">WED</span>
          <strong className="block text-5xl font-bold">16</strong>
          <span className="block text-base text-gray-400">November</span>
        </div>
        <div className="my-2 font-semibold">
          <p>All day</p>
          <p>6.00 - 6.45PM</p>
        </div>
        <div className="my-2 font-semibold">
          <div className="flex gap-3">
            <svg
              className="text-orange-400"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M156,72a76.2,76.2,0,0,0-20.26,2.73,55.63,55.63,0,0,0-9.41-11.54l9.51-13.57a8,8,0,1,0-13.11-9.18L113.22,54A55.9,55.9,0,0,0,88,48c-.58,0-1.16,0-1.74,0L83.37,31.71a8,8,0,1,0-15.75,2.77L70.5,50.82A56.1,56.1,0,0,0,47.23,65.67L33.61,56.14a8,8,0,1,0-9.17,13.11L38,78.77A55.55,55.55,0,0,0,32,104c0,.57,0,1.15,0,1.72L15.71,108.6a8,8,0,0,0,1.38,15.88,8.24,8.24,0,0,0,1.39-.12l16.32-2.88a55.74,55.74,0,0,0,5.86,12.42A52,52,0,0,0,76,224h80a76,76,0,0,0,0-152ZM48,104a40,40,0,0,1,72.54-23.24,76.26,76.26,0,0,0-35.62,40,52.14,52.14,0,0,0-31,4.17A40,40,0,0,1,48,104ZM156,208H76a36,36,0,1,1,4.78-71.69c-.37,2.37-.63,4.79-.77,7.23a8,8,0,0,0,16,.92,58.91,58.91,0,0,1,1.88-11.81c0-.16.09-.32.12-.48A60.06,60.06,0,1,1,156,208Z"></path>
            </svg>
            <span>35/50</span>
          </div>
          <p>report due</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

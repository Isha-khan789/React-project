import React from "react";
import backImg from "../assets/work-proceess.webp";

const Working_step = () => {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${backImg})` }}>
      {/* Dark overlay with centered content */}
      <div className="absolute inset-0 bg-[rgba(14,17,34,0.85)]"></div>

      {/* Content inside overlay */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold font-secondary mb-4">
          How it works
        </h2>
        <p className="text-base md:text-lg max-w-xl mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          eveniet consectetur, mollitia laborum officia porro cum voluptatum
          voluptatibus nemo rem voluptate impedit vel explicabo eaque odio error.
        </p>

        <div className="flex flex-col md:flex-row gap-8 w-full md:w-4/5">
          {/* Step 1 */}
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center">
              1
            </div>
            <h3 className="text-lg font-bold mt-8">Fill a form</h3>
            <p className="my-2 text-sm md:text-base text-black">
              Step 1 description goes here. Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center">
              2
            </div>
            <h3 className="text-lg font-bold mt-8">Get Matched</h3>
            <p className="my-2 text-sm md:text-base text-black">
              Step 2 description goes here. Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center">
              3
            </div>
            <h3 className="text-lg font-bold mt-8">Schedule</h3>
            <p className="my-2 text-sm md:text-base text-black">
              Step 3 description goes here. Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working_step;

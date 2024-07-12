import React from "react";
import heroImage from "../assets/heroImage.png";

const HeroSection = () => {
  return (
    <div className="bg-blue-100">
      <div className="container mx-auto px-4">
        <div className="w-full h-fit flex flex-col-reverse lg:flex-row items-center py-12">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-2xl lg:text-4xl font-bold">
              World's Best WordPress <br /> Tutorials & Resources
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam, non. <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam, non.
            </p>
            <div className="mt-8 h-[40px] bg-white max-w-full lg:max-w-max rounded-[4px] flex">
              <input
                className="h-full px-4 rounded-l-[4px] outline-0 flex-grow lg:flex-grow-0"
                type="text"
                placeholder="Email:"
                required
              />
              <button className="bg-neutral-900 font-bold text-white px-4 h-full rounded-[4px]">
                Start Now
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
            <img className="w-64 lg:w-96" src={heroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-start justify-center px-8 py-3 font-sans md:px-8 sm:px-5">
      {/* Background container with rounded corners, positioned slightly downward */}

      <div className="absolute z-0 min-w-[1490px] left-12  max-w-[1250px] h-[700px] min-h-[700px] gap-8 bg-[#27538E] rounded-4xl bottom-[-10px]">

      </div>

      {/* Main content container */}
      <div className="relative z-0 flex items-center justify-between w-full min-h-[758px] gap-8 px-16 rounded-3xl md:px-5 sm:px-5">
        {/* Background image with rounded corners */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e0114f4f314f3ead7d30db0c42177e0f9175fd6bf2ec90e1fd79415e6321e5?placeholderIfAbsent=true"
          alt="Hero background"
          className="absolute inset-0 object-cover w-full h-full rounded-3xl"
        />

        {/* Left content - properly centered and aligned to the left */}
        <div className="relative flex flex-col items-start justify-center w-1/2 min-w-[240px] ml-12 md:ml-6 md:w-3/4">
          <div className="w-full max-w-[600px] md:max-w-full">
            <h1 className="min-w-[320px] text-[60px] font-bold leading-[72px] tracking-[-1.2px] text-white line-clamp-2 md:max-w-full md:text-[40px] md:leading-[53px]">
              Fast-Tracking Your AI Evolution
            </h1>
            <p className="mt-6 text-xl font-normal leading-8 text-[#D9D9D9] line-clamp-2 md:max-w-full">
              Empowering businesses with cutting-edge technology and tailored
              solutions.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-start gap-3 mt-12 text-xl font-bold leading-[1.4] md:max-w-full md:mt-10">
            <button className="flex items-center justify-center min-w-[240px] px-[22px] py-4 gap-2.5 overflow-hidden text-[#344054] bg-white rounded-lg border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] md:px-5">
              <span className="self-stretch my-auto px-0.5">
                Discover Our Services
              </span>
            </button>
            <button className="flex items-center justify-center px-[22px] py-4 gap-2.5 overflow-hidden text-white bg-[#1E3260] rounded-lg border border-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d311a7dfdfc4da5ac4afd1d39864f0040d7be99bd177b32f1dc6c9b9744ebd11?placeholderIfAbsent=true"
                alt="Contact icon"
                className="object-contain w-6 h-6 my-auto aspect-square flex-shrink-0"
              />
              <span className="self-stretch my-auto px-0.5">Contact Us</span>
            </button>
          </div>
        </div>

        {/* Right side - empty space for balance */}
        <div className="relative w-1/2 h-full md:hidden"></div>
      </div>
    </section>
  );
};

export default Hero;

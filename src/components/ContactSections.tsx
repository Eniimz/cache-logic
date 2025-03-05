"use client";
import React from "react";

const ContactSections = () => {
  return (
    <section className="flex flex-col items-center justify-start py-24 bg-white overflow-hidden font-sans">
      <div className="w-full max-w-[1080px] px-8 text-center md:max-w-full md:px-5">
        <div className="flex flex-col items-center justify-start w-full md:max-w-full">
          <div className="w-[768px] max-w-[768px] md:max-w-full">
            <div className="flex flex-col items-stretch justify-start w-full md:max-w-full">
              <div className="self-center px-3 py-1 text-sm font-normal leading-4 text-[#414EC6] bg-[#F5F5FF] border border-[#D7DEFE] rounded-2xl">
                Our Locations
              </div>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.72px] text-[#101828] md:max-w-full">
                We are WORLDWIDE
              </h2>
            </div>
            <p className="mt-5 text-xl font-normal text-[#475467] md:max-w-full">
              We help our clients from almost every part of the world.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 w-full max-w-[1080px] px-8 md:max-w-full md:px-5 md:mt-10">
        <div className="flex w-full items-center justify-center md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22050247eeffd20aa6635d35d893873abc7f1c835483f76f598ff0dbe2888f6e?placeholderIfAbsent=true"
            alt="World map showing our locations"
            className="w-full max-w-[900px] min-w-[240px] object-contain object-center aspect-[2.1]"
          />
        </div>
      </div>

      <div className="mt-12 w-full max-w-[1080px] px-8 text-center md:max-w-full md:px-5 md:mt-10">
        <div className="flex w-full items-center justify-center gap-6 flex-wrap md:max-w-full">
          {/* United States Location */}
          <div className="flex flex-col items-center justify-start flex-1 min-w-[240px] max-w-[300px] flex-shrink basis-0">
            <div className="w-full">
              <h3 className="text-xl font-semibold text-[#101828]">
                United States
              </h3>
              <p className="mt-1 text-base font-normal text-[#475467]">
                Building X, Street Y, Baltimore MD
              </p>
            </div>
            <button className="mt-3 text-base font-semibold text-[#415EC6] overflow-hidden">
              Find Us
            </button>
          </div>

          {/* Pakistan Location */}
          <div className="flex flex-col items-center justify-start flex-1 min-w-[240px] max-w-[300px] flex-shrink basis-0 md:mr-5 md:ml-5">
            <div className="w-full">
              <h3 className="text-xl font-semibold text-[#101828]">Pakistan</h3>
              <p className="mt-1 text-base font-normal text-[#475467]">
                Building X, Street Y, Lahore PK
              </p>
            </div>
            <button className="mt-3 text-base font-semibold text-[#415EC6] overflow-hidden">
              Find Us
            </button>
          </div>

          {/* Global Contact */}
          <div className="flex flex-col items-center justify-start flex-1 min-w-[240px] max-w-[300px] flex-shrink basis-0">
            <div className="w-full">
              <h3 className="text-xl font-semibold text-[#101828]">
                Whole Earth.
              </h3>
              <p className="mt-1 text-base font-normal text-[#475467]">
                Mon-Fri from 8am to 5pm (PST).
              </p>
            </div>
            <button className="mt-3 text-base font-semibold text-[#415EC6] overflow-hidden">
              +1 (555) 000-0000
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSections;

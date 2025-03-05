"use client";
import Image from "next/image";
import React from "react";

const FeaturesSection2 = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 bg-white overflow-hidden font-sans">
      <div className="flex flex-col items-stretch justify-start w-full max-w-[1280px] px-8 md:px-5 sm:px-5">
        <div className="self-center w-full px-8 text-center md:px-5 sm:px-5">
          <div className="flex flex-col items-center justify-start w-full md:max-w-full">
            <div className="flex flex-col items-center justify-center w-full max-w-[768px] md:max-w-full">
              <div className="flex flex-col items-stretch justify-start w-full md:max-w-full">
                <div className="self-center px-3 py-1 text-sm font-normal leading-4 text-[#414EC6] bg-[#F5F5FF] border border-[#D7DEFE] rounded-2xl">
                  Why Us
                </div>
                <h2 className="mt-4 text-4xl  font-semibold leading-tight tracking-[-0.72px] text-[#101828] md:max-w-full font-sans">
                  How does Cache Logic stands out?
                </h2>
              </div>
              <p className="mt-5 text-xl font-normal leading-[30px] text-[#475467] md:max-w-[750px]">
                At Cache Logic, we are a passionate team of tech experts
                dedicated to powering your IT evolution. Founded by industry
                leaders with diverse expertise, we focus on delivering
                innovative, reliable, and scalable tech solutions—from AI and
                automation to cybersecurity and app development. Our mission is
                simple: help your business stay ahead in a digital world.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-16 md:mt-10 md:max-w-full flex flex-col justify-center items-center">
          <img
            src="/Why us.png"
            alt="Features overview"
            className="object-contain object-center md:w-[1000px]"
          />

          <div className="flex flex-wrap items-start justify-start w-full gap-8 mt-24 md:mt-10 md:max-w-full">
            {/* Feature 1 */}
            <div className="flex flex-col items-stretch justify-between flex-1 min-w-[320px] min-h-[222px] flex-shrink">
              <div className="flex flex-col items-stretch w-full text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9090789ff0f22c463fab9d0ae5430b03fba12564549e27655d826c86136255?placeholderIfAbsent=true"
                  alt="Global reach icon"
                  className="self-center w-12 h-12 object-contain object-center rounded-[28px]
                  "
                />
                <div className="mt-5 w-full">
                  <h3 className="text-xl font-semibold capitalize text-[#101828]">
                    Global reach with localized expertise.
                  </h3>
                  <p className="mt-2 text-base font-normal leading-6 text-[#475467]">
                    We bring world-class IT solutions to businesses across the
                    globe while ensuring tailored, region-specific support that
                    aligns with your unique market needs.
                  </p>
                </div>
              </div>
              <button className="self-center flex items-center justify-center gap-2 mt-5 text-base font-bold text-[#414EC6] overflow-hidden">
                <span className="self-stretch my-auto">Learn more</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3199a28731426c2b5c305cd5ff1ff4943e0c024186cef932199a5d046a374de2?placeholderIfAbsent=true"
                  alt="Arrow right"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0"
                />
              </button>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-stretch justify-between flex-1 min-w-[320px] min-h-[222px] flex-shrink">
              <div className="flex flex-col items-stretch w-full text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fafe31f777e16ddd80cf2c42bef4565f71bf975194eda0ddc047cb313f30e5a0?placeholderIfAbsent=true"
                  alt="Dedicated support icon"
                  className="self-center w-12 h-12 object-contain object-center rounded-[28px]"
                />
                <div className="mt-5 w-full">
                  <h3 className="text-xl font-semibold capitalize text-[#101828]">
                    Dedicated support to drive your success.
                  </h3>
                  <p className="mt-2 text-base font-normal leading-6 text-[#475467]">
                    Our expert team is always available to provide hands-on
                    assistance, ensuring smooth implementation and ongoing
                    optimization of your IT solutions.
                  </p>
                </div>
              </div>
              <button className="self-center flex items-center justify-center gap-2 mt-5 text-base font-bold text-[#414EC6] overflow-hidden">
                <span className="self-stretch my-auto">Learn more</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c632460084b279e3b1b9ae95ebbebc56351d37440a7965cd468e5a95813d1596?placeholderIfAbsent=true"
                  alt="Arrow right"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0"
                />
              </button>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-stretch justify-between flex-1 min-w-[320px] min-h-[222px] flex-shrink">
              <div className="flex flex-col items-stretch w-full text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f16a402bb6ed0ba9b31993b9e596396dece642e9f28793fd342e78c90799fa7c?placeholderIfAbsent=true"
                  alt="Tailored solutions icon"
                  className="self-center w-12 h-12 object-contain object-center rounded-[28px]"
                />
                <div className="mt-5 w-full">
                  <h3 className="text-xl font-semibold capitalize text-[#101828]">
                    Tailored solutions for every industry.
                  </h3>
                  <p className="mt-2 text-base font-normal leading-6 text-[#475467]">
                    Whether you're in finance, healthcare, or e-commerce, we
                    create customized technology solutions designed to meet your
                    industry's challenges and goals.
                  </p>
                </div>
              </div>
              <button className="self-center flex items-center justify-center gap-2 mt-5 text-base font-bold text-[#414EC6] overflow-hidden">
                <span className="self-stretch my-auto">Learn more</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e82912930031dbccfed6ec9bd10f7799d9f1d24ed328409c1d1fea69eb3f9b4?placeholderIfAbsent=true"
                  alt="Arrow right"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection2;

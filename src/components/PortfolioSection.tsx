"use client";
import React from "react";

const PortfolioSection = () => {
  return (
    <section className="flex flex-col items-center justify-start py-24 bg-white overflow-hidden font-sans px-1">
      <div className="w-full max-w-[1280px] px-8 text-center md:max-w-full md:px-5 sm:px-5">
        <div className="flex flex-col items-center justify-start w-full md:max-w-full">
          <div className="w-full max-w-[768px] md:max-w-full">
            <div className="flex flex-col items-stretch justify-start w-full md:max-w-full">
              <div className="self-center px-3 py-1 text-sm font-normal leading-4 text-[#414EC6] bg-[#F5F5FF] border border-[#D7DEFE] rounded-2xl">
                Our Portfolio
              </div>
              <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.72px] text-[#101828] md:max-w-full">
                Products We Have Worked On
              </h2>
            </div>
            <p className="mt-5 text-xl font-normal leading-[30px] text-[#475467] md:max-w-full">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users.
            </p>
          </div>
        </div>
      </div>

      {/* Product 1 Section - Text left, Image right */}
      <div className="w-full max-w-[1280px] px-8 md:px-10 sm:px-5">
        <div className="flex flex-wrap items-center justify-between gap-16 mt-24 md:mt-10 md:gap-10">
          <div className="flex-1 flex-shrink min-w-[240px] max-w-[480px] flex flex-col items-stretch justify-start md:max-w-full">
            <div className="w-full md:max-w-full">
              <div className="w-full md:max-w-full">
                <h3 className="text-3xl font-semibold text-[#101828] leading-tight md:max-w-full">
                  Product # 1
                </h3>
                <p className="mt-4 text-lg font-normal leading-7 text-[#475467] line-clamp-3 md:max-w-[500px]">
                  Whether you have a team of 2 or 200, our shared team inboxes
                  keep everyone on the same page and in the loop.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-8 text-base font-bold">
              <button className="flex items-center justify-center px-[18px] py-3 gap-1.5 bg-white text-[#344054] rounded-lg border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb81758d387e692cb20db8c3773eefde87cdf97c2927beb469f0d33261ae6cd?placeholderIfAbsent=true"
                  alt="Demo icon"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0"
                />
                <span className="self-stretch my-auto px-0.5">Demo</span>
              </button>
              <button className="flex items-center justify-center px-[18px] py-3 gap-1.5 bg-[#1D315F] text-white rounded-lg border border-[#1D315F] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                <span className="self-stretch my-auto px-0.5">Learn more</span>
              </button>
            </div>
          </div>
          <div className="flex-shrink min-w-[240px] max-w-[480px] flex flex-col items-stretch justify-center p-6 bg-[#F2F4F7] rounded-3xl md:max-w-full md:px-5 relative">
            {/* Decorative trail lines */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-20px] right-[-20px] w-[150px] h-[2px] bg-[#D0D5DD] rotate-45"></div>
              <div className="absolute top-[-10px] right-[-30px] w-[120px] h-[2px] bg-[#D0D5DD] rotate-45"></div>
              <div className="absolute top-[0px] right-[-40px] w-[100px] h-[2px] bg-[#D0D5DD] rotate-45"></div>

              <div className="absolute bottom-[-20px] left-[-20px] w-[150px] h-[2px] bg-[#D0D5DD] rotate-45"></div>
              <div className="absolute bottom-[-10px] left-[-30px] w-[120px] h-[2px] bg-[#D0D5DD] rotate-45"></div>
              <div className="absolute bottom-[0px] left-[-40px] w-[100px] h-[2px] bg-[#D0D5DD] rotate-45"></div>
            </div>

            <div className="flex flex-col items-stretch justify-center p-1 border-4 border-[#101828] rounded-md md:w-lg relative z-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7301a24a83b8c8f8b5910a7bb3afc480f53628c5bd4656f1629a7433cc0d7704?placeholderIfAbsent=true"
                alt="Product 1 screenshot"
                className="object-contain object-center rounded-md md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product 2 Section - Image left, Text right */}
      <div className="w-full max-w-[1280px] px-8 sm:px-5">
        <div className="flex flex-wrap items-center justify-between mt-24 md:mt-10">
          <div className="flex-shrink min-w-[240px] max-w-[480px] flex flex-col items-stretch justify-center p-6 bg-[#F2F4F7] rounded-3xl md:max-w-full md:px-5 relative">
            {/* Decorative trail lines */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-20px] left-[-20px] w-[150px] h-[2px] bg-[#D0D5DD] rotate-[-45deg]"></div>
              <div className="absolute top-[-10px] left-[-30px] w-[120px] h-[2px] bg-[#D0D5DD] rotate-[-45deg]"></div>
              <div className="absolute top-[0px] left-[-40px] w-[100px] h-[2px] bg-[#D0D5DD] rotate-[-45deg]"></div>

              <div className="absolute bottom-[-20px] right-[-20px] w-[150px] h-[2px] bg-[#D0D5DD] rotate-[-45deg]"></div>
              <div className="absolute bottom-[-10px] right-[-30px] w-[120px] h-[2px] bg-[#D0D5DD] rotate-[-45deg]"></div>
              <div className="absolute bottom-[0px] right-[-40px] w-[100px] h-[2px] bg-[#D0D5DD] rotate-[-45deg]"></div>
            </div>

            <div className="flex flex-col items-stretch justify-center p-1 border-4 border-[#101828] rounded-md md:w-lg relative z-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7301a24a83b8c8f8b5910a7bb3afc480f53628c5bd4656f1629a7433cc0d7704?placeholderIfAbsent=true"
                alt="Product 2 screenshot"
                className="w-full aspect-[1.5] object-contain object-center rounded-md md:max-w-full"
              />
            </div>
          </div>
          <div className="flex-shrink min-w-[240px] max-w-[480px] flex flex-col items-stretch justify-start md:max-w-full md:pr-14">
            <div className="w-full md:max-w-full">
              <div className="w-full md:max-w-full">
                <h3 className="text-3xl font-semibold text-[#101828] leading-tight md:max-w-full">
                  Product # 2
                </h3>
                <p className="mt-4 text-lg font-normal leading-7 text-[#475467] line-clamp-3 md:max-w-[500px]">
                  Keep your customers in the flow by embedding help articles
                  right on your website. With Beacon, they never have to leave
                  the page.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-8 text-base font-bold">
              <button className="flex items-center justify-center px-[18px] py-3 gap-1.5 bg-white text-[#344054] rounded-lg border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/314c6a46c2724d9aa21811d83180d7c5ffb58528f17d11df282edfee95527384?placeholderIfAbsent=true"
                  alt="Demo icon"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0"
                />
                <span className="self-stretch my-auto px-0.5">Demo</span>
              </button>
              <button className="flex items-center justify-center px-[18px] py-3 gap-1.5 bg-[#1D315F] text-white rounded-lg border border-[#1D315F] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                <span className="self-stretch my-auto px-0.5">Learn more</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product 3 Section - Text left, Image right */}
      <div className="w-full max-w-[1280px] px-8 md:px-10 sm:px-5">
        <div className="flex flex-wrap items-center justify-between gap-16 mt-24 md:mt-10 md:gap-10">
          <div className="flex-1 flex-shrink min-w-[240px] max-w-[480px] flex flex-col items-stretch justify-start md:max-w-full">
            <div className="w-full md:max-w-full">
              <div className="w-full md:max-w-full">
                <h3 className="text-3xl font-semibold text-[#101828] leading-tight md:max-w-full">
                  Product # 3
                </h3>
                <p className="mt-4 text-lg font-normal leading-7 text-[#475467] line-clamp-3 md:max-w-[500px]">
                  Measure what matters with Untitled's easy-to-use reports. You
                  can filter, export, and drilldown on the data in a couple
                  clicks.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-8 text-base font-bold">
              <button className="flex items-center justify-center px-[18px] py-3 gap-1.5 bg-white text-[#344054] rounded-lg border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/09d79f89931e39c741a6e499d6069ca64556dbf01bb42537035cbe053d57d920?placeholderIfAbsent=true"
                  alt="Demo icon"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0"
                />
                <span className="self-stretch my-auto px-0.5">Demo</span>
              </button>
              <button className="flex items-center justify-center px-[18px] py-3 gap-1.5 bg-[#1D315F] text-white rounded-lg border border-[#1D315F] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                <span className="self-stretch my-auto px-0.5">Learn more</span>
              </button>
            </div>
          </div>
          <div className="flex-shrink min-w-[240px] max-w-[480px] flex flex-col items-stretch justify-center p-6 bg-[#F2F4F7] rounded-3xl md:max-w-full md:px-5 relative">
            {/* Decorative trail lines */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-20px] right-[-20px] w-[150px] h-[2px] bg-[#D0D5DD] rotate-45"></div>
              <div className="absolute top-[-10px] right-[-30px] w-[120px] h-[2px] bg-[#D0D5DD] rotate-45"></div>
              <div className="absolute top-[0px] right-[-40px] w-[100px] h-[2px] bg-[#D0D5DD] rotate-45"></div>

              <div className="absolute bottom-[-20px] left-[-20px] w-[150px] h-[2px] bg-[#D0D5DD] rotate-45"></div>
              <div className="absolute bottom-[-10px] left-[-30px] w-[120px] h-[2px] bg-[#D0D5DD] rotate-45"></div>
              <div className="absolute bottom-[0px] left-[-40px] w-[100px] h-[2px] bg-[#D0D5DD] rotate-45"></div>
            </div>

            <div className="flex flex-col items-stretch justify-center p-1 border-4 border-[#101828] rounded-md md:w-lg relative z-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7301a24a83b8c8f8b5910a7bb3afc480f53628c5bd4656f1629a7433cc0d7704?placeholderIfAbsent=true"
                alt="Product 3 screenshot"
                className="w-full aspect-[1.5] object-contain object-center rounded-md md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

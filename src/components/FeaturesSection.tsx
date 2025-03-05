"use client";
import React from "react";

const FeaturesSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 bg-white overflow-hidden font-sans">
      <div className="flex flex-col items-stretch justify-start w-full max-w-[1280px] px-8 md:px-5 sm:px-5">
        <div className="self-center w-full px-8 text-center md:px-5 sm:px-5">
          <div className="flex flex-col items-center justify-start w-full md:max-w-full">
            <div className="w-full max-w-[768px] md:max-w-full">
              <div className="flex flex-col items-stretch justify-start w-full md:max-w-full">
                <div className="self-center px-3 py-1 text-sm font-normal leading-4 text-[#414EC6] bg-[#F5F5FF] border border-[#D7DEFE] rounded-2xl">
                  Our Services
                </div>
                <h2 className="mt-4 text-4xl font-semibold font-sans leading-tight tracking-[-0.72px] text-[#101828] md:max-w-full">
                  Services We Offer
                </h2>
              </div>
              <p className="mt-5 text-xl leading-[30px] text-[#475467] md:max-w-full">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-start w-full gap-8 mt-16 md:mt-10 md:max-w-full">
          {/* AI/ML Service Card */}
          <div className="min-w-[280px] w-[592px] min-h-[362px] p-6 pb-12 bg-[#F9FAFB] rounded-xl md:max-w-full md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/707e037994299f577e8799e284544fef901ec555d600eca5152e73b855dff91c?placeholderIfAbsent=true"
              alt="AI/ML icon"
              className="w-12 h-12 object-contain object-center rounded-[10px] aspect-square"
            />
            <div className="flex flex-col items-stretch justify-between w-full min-h-[178px] mt-16 md:mt-10">
              <div className="w-full md:max-w-full">
                <h3 className="text-xl font-semibold text-[#101828] md:max-w-full">
                  Artificial Intelligence (AI/ML)
                </h3>
                <p className="mt-2 text-base font-normal leading-6 text-[#475467] md:max-w-full">
                  Revolutionizing decisions through intelligent solutions. We
                  use latest AI solutions to enhance and digitalize your
                  operations.
                </p>
              </div>
              <button className="flex items-center self-start gap-2 mt-[68px] text-base font-bold text-[#3A6EB3] md:mt-10">
                <span className="self-stretch my-auto">View Service</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/186b43f18f27ee0638e2f5baf63cefbf66628a9fe056d896cc3bf3bc21063727?placeholderIfAbsent=true"
                  alt="Arrow right"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0 aspect-square"
                />
              </button>
            </div>
          </div>

          {/* Automation Service Card - Featured */}
          <div className="flex-1 flex-shrink min-w-[280px] min-h-[362px] p-6 pb-12 bg-[#1D315F] rounded-[20px] shadow-[0px_8px_32px_rgba(29,57,102,0.6)] md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/06338fc0bc05b941bd70ae5ccc28c9a830ee9b2f4a78b92c4d030c5e6efbf0bb?placeholderIfAbsent=true"
              alt="Automation icon"
              className="w-12 h-12 object-contain object-center rounded-[10px] aspect-square"
            />
            <div className="flex flex-col items-stretch justify-between w-full min-h-[178px] mt-16 md:mt-10">
              <div className="w-full">
                <h3 className="text-xl font-semibold text-white">Automation</h3>
                <p className="mt-2 text-base font-normal leading-6 text-[#D9D9D9]">
                  Streamlining processes for greater efficiency.
                </p>
              </div>
              <button className="flex items-center self-start gap-2 mt-[68px] text-base font-bold text-white md:mt-10">
                <span className="self-stretch my-auto">View Service</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb31bb4aad76ff13925ea6e86c283101e750c09d0e7651aa5406fb40bc403b5d?placeholderIfAbsent=true"
                  alt="Arrow right"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0 aspect-square"
                />
              </button>
            </div>
          </div>

          {/* Cybersecurity Service Card */}
          <div className="flex-1 flex-shrink min-w-[280px] min-h-[362px] p-6 pb-12 bg-[#F9FAFB] rounded-xl md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5142dda367e200c1fd5119f131afd8a5b73d8fe0127f5afc09023cf91d594bc?placeholderIfAbsent=true"
              alt="Cybersecurity icon"
              className="w-12 h-12 object-contain object-center rounded-[10px] aspect-square"
            />
            <div className="flex flex-col items-stretch justify-between w-full min-h-[178px] mt-16 md:mt-10">
              <div className="w-full">
                <h3 className="text-xl font-semibold text-[#101828]">
                  Cybersecurity
                </h3>
                <p className="mt-2 text-base font-normal leading-6 text-[#475467]">
                  Protecting your business from evolving threats.
                </p>
              </div>
              <button className="flex items-center self-start gap-2 mt-[68px] text-base font-bold text-[#3A6EB3] md:mt-10">
                <span className="self-stretch my-auto">View Service</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef0f79226ebfeaf9f4363cc6560ed158f650f106c38762da1a7b4f7c3896049e?placeholderIfAbsent=true"
                  alt="Arrow right"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0 aspect-square"
                />
              </button>
            </div>
          </div>

          {/* Custom Solutions Service Card */}
          <div className="flex-1 flex-shrink min-w-[280px] min-h-[362px] p-6 pb-12 bg-[#F9FAFB] rounded-xl md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5142dda367e200c1fd5119f131afd8a5b73d8fe0127f5afc09023cf91d594bc?placeholderIfAbsent=true"
              alt="Custom Solutions icon"
              className="w-12 h-12 object-contain object-center rounded-[10px] aspect-square"
            />
            <div className="flex flex-col items-stretch justify-between w-full min-h-[178px] mt-16 md:mt-10">
              <div className="w-full">
                <h3 className="text-xl font-semibold text-[#101828]">
                  Custom Solutions
                </h3>
                <p className="mt-2 text-base font-normal leading-6 text-[#475467]">
                  Tech built uniquely for your needs.
                </p>
              </div>
              <button className="flex items-center self-start gap-2 mt-[68px] text-base font-bold text-[#3A6EB3] md:mt-10">
                <span className="self-stretch my-auto">View Service</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/791b28911c688f194e5af599bcff13598099dca3157f4c573ed94ff565776561?placeholderIfAbsent=true"
                  alt="Arrow right"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0 aspect-square"
                />
              </button>
            </div>
          </div>

          {/* DevOps Service Card */}
          <div className="flex-1 flex-shrink min-w-[280px] min-h-[362px] p-6 pb-12 bg-[#F9FAFB] rounded-xl md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5142dda367e200c1fd5119f131afd8a5b73d8fe0127f5afc09023cf91d594bc?placeholderIfAbsent=true"
              alt="DevOps icon"
              className="w-12 h-12 object-contain object-center rounded-[10px] aspect-square"
            />
            <div className="flex flex-col items-stretch justify-between w-full min-h-[178px] mt-16 md:mt-10">
              <div className="w-full">
                <h3 className="text-xl font-semibold text-[#101828]">DevOps</h3>
                <p className="mt-2 text-base font-normal leading-6 text-[#475467]">
                  Optimizing development and deployment pipelines.
                </p>
              </div>
              <button className="flex items-center self-start gap-2 mt-[68px] text-base font-bold text-[#3A6EB3] md:mt-10">
                <span className="self-stretch my-auto">View Service</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/518a5a026a14225d0a9d8b4eae519515944a5b2cb6cd40d13ebfa32f6c43ccc6?placeholderIfAbsent=true"
                  alt="Arrow right"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0 aspect-square"
                />
              </button>
            </div>
          </div>

          {/* Web & Mobile Apps Service Card */}
          <div className="min-w-[280px] w-[592px] min-h-[362px] p-6 pb-12 bg-[#F9FAFB] rounded-xl md:max-w-full md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7fc0bbbf29184a77c1bbf5bc82ebd142939f27c6e4ae35b3be6d7687f5034c8?placeholderIfAbsent=true"
              alt="Web & Mobile Apps icon"
              className="w-12 h-12 object-contain object-center rounded-[10px] aspect-square"
            />
            <div className="flex flex-col items-stretch justify-between w-full min-h-[178px] mt-16 md:mt-10 md:max-w-full">
              <div className="w-full md:max-w-full">
                <h3 className="text-xl font-semibold text-[#101828] md:max-w-full">
                  Web & Mobile Apps
                </h3>
                <p className="mt-2 text-base font-normal leading-6 text-[#475467] md:max-w-full">
                  Building high-performance, user-friendly applications tailored
                  to your business needs. From sleek mobile experiences to
                  robust web platforms, we ensure seamless functionality and
                  scalability.
                </p>
              </div>
              <button className="flex items-center self-start gap-2 mt-11 text-base font-bold text-[#3A6EB3] md:mt-10">
                <span className="self-stretch my-auto">View Service</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/518a5a026a14225d0a9d8b4eae519515944a5b2cb6cd40d13ebfa32f6c43ccc6?placeholderIfAbsent=true"
                  alt="Arrow right"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0 aspect-square"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

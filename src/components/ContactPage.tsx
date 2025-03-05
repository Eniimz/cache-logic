"use client";
import React from "react";

const ContactPage = () => {
  return (
    <section className="flex flex-col items-center justify-start py-24 bg-white overflow-hidden w-full">
      <div className="w-full max-w-[1280px] px-8 font-sans md:px-5">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="w-full max-w-[900px] text-left">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="self-start px-3 py-1 text-sm font-normal leading-4 text-[#414EC6] bg-[#F5F5FF] border border-[#D7DEFE] rounded-2xl">
                Contact Us
              </div>
              <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.72px] text-[#101828]">
                Let's Build the Next Product Together
              </h2>
            </div>
            <p className="mt-5 text-xl font-normal text-[#475467]">
              We'd love to hear from you. Please fill out this form or shoot us
              an email.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mt-16 w-full max-w-[1280px] px-8 items-start gap-24 justify-between md:px-5 md:mt-10 md:gap-16">
        {/* Contact Information Section */}
        <div className="flex-1 flex-shrink min-w-[300px] max-w-[520px] font-sans">
          <div className="flex flex-wrap w-full items-start gap-12 justify-start">
            {/* Email Contact */}
            <div className="flex flex-col items-start justify-start flex-1 min-w-[240px] flex-shrink flex-basis-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/009a4a79c70fb54de289ec4da753943fec37f6cd78a8ef89360c6e225425a14f?placeholderIfAbsent=true"
                alt="Email icon"
                className="w-6 h-6 object-contain object-center aspect-square"
              />
              <div className="self-stretch mt-4 w-full">
                <h3 className="text-xl font-semibold text-[#101828]">Email</h3>
                <p className="mt-2 text-base font-normal text-[#475467]">
                  Our friendly team is here to help.
                </p>
              </div>
              <a
                href="mailto:hi@cachelogic.tech"
                className="self-stretch mt-4 text-base font-semibold text-[#415EC6] overflow-hidden"
              >
                hi@cachelogic.tech
              </a>
            </div>

            {/* Phone Contact */}
            <div className="flex flex-col items-start justify-start flex-1 min-w-[240px] flex-shrink flex-basis-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e8f2ec8b312686ae154fc23040365eb92ebece38109d6190479f9dacea22209?placeholderIfAbsent=true"
                alt="Phone icon"
                className="w-6 h-6 object-contain object-center aspect-square"
              />
              <div className="self-stretch mt-4 w-full">
                <h3 className="text-xl font-semibold text-[#101828]">Phone</h3>
                <p className="mt-2 text-base font-normal text-[#475467]">
                  Mon-Fri from 8am to 5pm.
                </p>
              </div>
              <a
                href="tel:+15550000000"
                className="self-stretch mt-4 text-base font-semibold text-[#415EC6] overflow-hidden"
              >
                +1 (555) 000-0000
              </a>
            </div>
          </div>

          {/* Office Location */}
          <div className="flex mt-12 w-full items-start gap-8 justify-start md:mt-10">
            <div className="flex flex-col items-start justify-start flex-1 min-w-[240px] w-full flex-shrink flex-basis-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfef88b52d91bbaad8563b08e8fa310329cdbb18db1f894b2a214ec0e32538da?placeholderIfAbsent=true"
                alt="Office icon"
                className="w-6 h-6 object-contain object-center aspect-square"
              />
              <div className="self-stretch mt-4 w-full">
                <h3 className="text-xl font-semibold text-[#101828]">Office</h3>
                <p className="mt-2 text-base font-normal text-[#475467]">
                  Come say hello at our office HQ.
                </p>
              </div>
              <div className="self-stretch mt-4 text-base font-semibold text-[#415EC6] overflow-hidden">
                Building X, Street Y, Baltimore MD
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 flex-shrink min-w-[320px] max-w-[640px] flex-basis-0 bg-[#F9FAFB] rounded-2xl p-12 md:p-8">
          <form className="w-full">
            <div className="w-full">
              {/* Name Fields Row */}
              <div className="flex flex-wrap w-full items-start gap-10 justify-between">
                {/* First Name Field */}
                <div className="flex-1 flex-shrink flex-basis-0 min-w-[220px]">
                  <div className="w-full">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-[#344054] font-inter"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      placeholder="First name"
                      className="mt-1.5 w-full px-4 py-3 bg-white text-[#667085] text-base font-normal rounded-lg border border-[#D0D5DD] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D315F] focus:border-[#1D315F]"
                    />
                  </div>
                </div>

                {/* Last Name Field */}
                <div className="flex-1 flex-shrink flex-basis-0 min-w-[220px]">
                  <div className="w-full">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-[#344054] font-inter"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      placeholder="Last name"
                      className="mt-1.5 w-full px-4 py-3 bg-white text-[#667085] text-base font-normal rounded-lg border border-[#D0D5DD] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D315F] focus:border-[#1D315F]"
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div className="mt-8 w-full whitespace-nowrap md:whitespace-normal">
                <div className="w-full md:whitespace-normal">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#344054] font-inter"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@company.com"
                    className="mt-1.5 w-full px-4 py-3 bg-white text-[#667085] text-base font-normal rounded-lg border border-[#D0D5DD] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D315F] focus:border-[#1D315F] md:whitespace-normal"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="mt-8 min-h-[180px] w-full">
                <div className="w-full flex-1">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#344054] font-inter"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Leave us a message..."
                    rows={6}
                    className="mt-1.5 w-full px-4 py-3 bg-white text-[#667085] text-base font-normal rounded-lg border border-[#D0D5DD] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D315F] focus:border-[#1D315F]"
                  ></textarea>
                </div>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex flex-wrap mt-8 w-full items-start gap-3 justify-start">
                <div className="flex items-center justify-center pt-0.5 w-5">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    className="h-5 w-5 rounded-md border border-[#D0D5DD] text-[#1D315F] focus:ring-[#1D315F]"
                  />
                </div>
                <label
                  htmlFor="privacy-policy"
                  className="min-w-[240px] text-base font-normal text-[#475467] leading-6 flex-1 flex-shrink flex-basis-0"
                >
                  You agree to our friendly{" "}
                  <a href="#" className="underline">
                    privacy policy
                  </a>
                  .
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10 w-full font-sans text-base font-semibold text-white">
              <button
                type="submit"
                className="flex justify-center items-center w-full px-5 py-3.5 gap-1.5 bg-[#1D315F] text-white rounded-lg border border-[#1D315F] shadow-sm hover:bg-[#152241] focus:outline-none focus:ring-2 focus:ring-[#1D315F] focus:ring-offset-2"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

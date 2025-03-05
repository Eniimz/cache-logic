"use client"

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-start py-8 sm:py-12 md:py-[58px] px-4 sm:px-6 md:px-8 lg:px-12 bg-[#0C111D] overflow-hidden w-full">
      {/* Top Container */}
      <div className="w-full max-w-[1080px] px-4 font-sans">
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between w-full gap-6 sm:gap-[24px] border-b border-[#182230] pb-8 sm:pb-12">
          {/* Heading and supporting text */}
          <div className="flex-1 flex-shrink min-w-[240px] max-w-full sm:max-w-[520px] text-left">
            <h2 className="text-2xl sm:text-[30px] font-semibold text-white leading-tight">
              Innovating IT solutions for the modern world.
            </h2>
            <p className="text-base sm:text-[17px] font-normal text-[#EAECF0] leading-relaxed sm:leading-[30px] mt-3 sm:mt-4 max-w-full sm:max-w-[480px]">
              Empowering businesses with cutting-edge technology and tailored solutions.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-3 w-full sm:w-auto text-lg sm:text-[20px] font-bold leading-[1.4]">
            <button className="flex items-center justify-center w-full sm:min-w-[240px] px-4 sm:px-[22px] py-3 sm:py-4 gap-2.5 bg-white text-[#344054] rounded-lg border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
              <span className="self-stretch my-auto px-0.5">Discover Our Services</span>
            </button>
            <button className="flex items-center justify-center w-full sm:w-auto px-4 sm:px-[22px] py-3 sm:py-4 gap-2.5 text-white rounded-lg border border-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d311a7dfdfc4da5ac4afd1d39864f0040d7be99bd177b32f1dc6c9b9744ebd11?placeholderIfAbsent=true"
                alt="Contact icon"
                className="w-5 sm:w-6 h-5 sm:h-6 object-contain object-center self-stretch my-auto flex-shrink-0 aspect-square"
              />
              <span className="self-stretch my-auto px-0.5 md:whitespace-nowrap">Contact Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* Middle Container */}
      <div className="w-full max-w-[1080px] px-4 mt-8 sm:mt-10">
        <div className="flex flex-col sm:flex-row flex-wrap w-full items-start justify-start gap-8 sm:gap-12 relative">
          {/* Logo and company info */}
          <div className="flex-1 flex-shrink min-w-[240px] max-w-full sm:max-w-[320px] font-sans text-base font-normal text-left">
            <div className="w-full max-w-full text-[#EAECF0] leading-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/083cc3e874e8420ecf98bab4df598a423891a44c1f186415e0a81fb31909219b?placeholderIfAbsent=true"
                alt="Cache Logic Logo"
                className="w-[160px] sm:w-[197px] max-w-full object-contain object-center aspect-[7.04]"
              />
              <p className="mt-4 sm:mt-6 text-sm sm:text-base">
                Cache Logic is a global IT services firm committed to powering your business with innovative tech
                solutions.
              </p>
            </div>
            <div className="text-[#d9d9d9] mt-4 sm:mt-6 text-sm sm:text-base">
              © 2077 Cache Logic. All rights reserved.
            </div>
          </div>

          {/* Footer links columns - made into a grid for better mobile layout */}
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 sm:gap-0 sm:flex-shrink sm:min-w-[96px] sm:max-w-[160px] font-sans text-left sm:mx-4">
            <div>
              <div className="text-[#D0D5DD] text-sm font-normal leading-none">Company</div>
              <nav className="flex flex-col items-start w-full mt-3 sm:mt-4 text-sm sm:text-base font-bold text-[#EAECF0]">
                <a href="#" className="flex items-center gap-2">
                  About us
                </a>
                <a href="#" className="flex items-center gap-2 mt-2 sm:mt-3">
                  Careers
                </a>
                <a href="#" className="flex items-center gap-2 mt-2 sm:mt-3">
                  News
                </a>
                <a href="#" className="flex items-center gap-2 mt-2 sm:mt-3">
                  Contact
                </a>
              </nav>
            </div>

            {/* Additional column for mobile - you can add more links here */}
            <div className="sm:hidden">
              <div className="text-[#D0D5DD] text-sm font-normal leading-none">Resources</div>
              <nav className="flex flex-col items-start w-full mt-3 text-sm font-bold text-[#EAECF0]">
                <a href="#" className="flex items-center gap-2">
                  Blog
                </a>
                <a href="#" className="flex items-center gap-2 mt-2">
                  Support
                </a>
                <a href="#" className="flex items-center gap-2 mt-2">
                  FAQ
                </a>
              </nav>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center sm:items-end justify-start sm:justify-center w-full sm:min-w-[240px] sm:max-w-[280px] sm:self-stretch sm:absolute sm:right-0 sm:bottom-0 mt-6 sm:mt-0">
            <div className="flex items-center gap-4 sm:mt-auto">
              <a href="#" aria-label="Social media">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cf62e1d757597d7bf61a46fa1e372183871866129dcba8f18d5f6cb3d98c51c?placeholderIfAbsent=true"
                  alt="Social icon"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain object-center flex-shrink-0"
                />
              </a>
              <a href="#" aria-label="Twitter/X">
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-5 sm:h-5"
                  >
                    <path
                      d="M22 4.01C21.9 4.3 21.6 5.07 21.1 6.07C19.5 9.5 17.4 12.4 14.9 14.9C12.4 17.4 9.5 19.5 6.1 21.1C5.1 21.6 4.3 21.9 4 22H2L3.3 17.3L3.5 16.8C3.6 16.5 3.8 16.2 4 16C4.2 15.8 4.5 15.6 4.8 15.5L5.3 15.3L9.8 13.8L10.1 13.7C10.3 13.6 10.5 13.6 10.7 13.6C10.9 13.6 11.1 13.6 11.3 13.7L11.6 13.8L15.8 15.3L16.3 15.5C16.6 15.6 16.9 15.8 17.1 16C17.3 16.2 17.5 16.5 17.6 16.8L17.8 17.3L19 22H17C16.7 21.9 15.9 21.6 14.9 21.1C12.4 19.5 9.5 17.4 7 14.9C4.5 12.4 2.4 9.5 0.9 6.1C0.4 5.1 0.1 4.3 0 4V2L4.7 3.3L5.2 3.5C5.5 3.6 5.8 3.8 6 4C6.2 4.2 6.4 4.5 6.5 4.8L6.7 5.3L8.2 9.8L8.3 10.1C8.4 10.3 8.4 10.5 8.4 10.7C8.4 10.9 8.4 11.1 8.3 11.3L8.2 11.6L6.7 15.8L6.5 16.3C6.4 16.6 6.2 16.9 6 17.1C5.8 17.3 5.5 17.5 5.2 17.6L4.7 17.8L0 19V17C0.1 16.7 0.4 15.9 0.9 14.9C2.5 12.4 4.6 9.5 7.1 7C9.6 4.5 12.5 2.4 15.9 0.9C16.9 0.4 17.7 0.1 18 0H20L18.7 4.7L18.5 5.2C18.4 5.5 18.2 5.8 18 6C17.8 6.2 17.5 6.4 17.2 6.5L16.7 6.7L12.2 8.2L11.9 8.3C11.7 8.4 11.5 8.4 11.3 8.4C11.1 8.4 10.9 8.4 10.7 8.3L10.4 8.2L6.2 6.7L5.7 6.5C5.4 6.4 5.1 6.2 4.9 6C4.7 5.8 4.5 5.5 4.4 5.2L4.2 4.7L3 0H5C5.3 0.1 6.1 0.4 7.1 0.9C9.6 2.5 12.5 4.6 15 7.1C17.5 9.6 19.6 12.5 21.1 15.9C21.6 16.9 21.9 17.7 22 18V20L17.3 18.7L16.8 18.5C16.5 18.4 16.2 18.2 16 18C15.8 17.8 15.6 17.5 15.5 17.2L15.3 16.7L13.8 12.2L13.7 11.9C13.6 11.7 13.6 11.5 13.6 11.3C13.6 11.1 13.6 10.9 13.7 10.7L13.8 10.4L15.3 6.2L15.5 5.7C15.6 5.4 15.8 5.1 16 4.9C16.2 4.7 16.5 4.5 16.8 4.4L17.3 4.2L22 3V4.01Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </a>
              <a href="#" aria-label="Social media">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2961f1c0c73c0d970fc44c6f221c882ea088923252b8766efeac53b42405d09?placeholderIfAbsent=true"
                  alt="Social icon"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain object-center flex-shrink-0"
                />
              </a>
              <a href="#" aria-label="Social media">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ce1dabde5333ef3507d3bac174fb787378a3dc54d626465d3641963f38ee187?placeholderIfAbsent=true"
                  alt="Social icon"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain object-center flex-shrink-0"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Container */}
      <div className="flex flex-col items-center justify-center w-full max-w-[1080px] font-sans mt-8">
        <div className="w-full min-h-[100px] sm:min-h-[150px] md:min-h-[200px] pt-1 border-t border-[#182230] flex items-center justify-center px-4 sm:px-8 md:px-20">
          <img
            src="./footerLogo.png"
            alt="Cache Logic"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer


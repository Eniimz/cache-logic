"use client"
import { useState } from "react"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full py-4">
      <div className="flex w-full px-4 sm:px-6 md:px-10 items-center justify-between flex-wrap gap-4 sm:gap-6 md:gap-10">
        {/* Logo and Desktop Navigation */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10 text-[#475467] font-bold">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7767356532f7d00e53c612259bc615d11c66c7537c8cacf202f987fe632eda00?placeholderIfAbsent=true&apiKey=631ef8f272f84a248633dc8a3c3b1fb1"
            alt="Logo"
            className="w-[150px] sm:w-[180px] md:w-[197px] h-auto object-contain object-center self-stretch my-auto flex-shrink-0"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 self-stretch">
            <div className="self-stretch my-auto overflow-hidden">Home</div>
            <div className="flex items-center self-stretch my-auto">
              <div className="flex items-center gap-2 justify-center overflow-hidden">
                <span className="self-stretch my-auto">Services</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6950ecb31c284909607359aa7e93f637fcc361cb6a8b3ca3a711b3f76044b1b?placeholderIfAbsent=true&apiKey=631ef8f272f84a248633dc8a3c3b1fb1"
                  alt="Dropdown icon"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0"
                />
              </div>
            </div>
            <div className="flex items-center self-stretch my-auto">
              <div className="flex items-center gap-2 justify-center overflow-hidden">
                <span className="self-stretch my-auto">About</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6950ecb31c284909607359aa7e93f637fcc361cb6a8b3ca3a711b3f76044b1b?placeholderIfAbsent=true&apiKey=631ef8f272f84a248633dc8a3c3b1fb1"
                  alt="Dropdown icon"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0"
                />
              </div>
            </div>
            <div className="self-stretch my-auto overflow-hidden">Contact</div>
          </nav>
        </div>

        {/* Mobile Menu Button and Contact Us Button */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center p-2 rounded-md text-[#475467]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Contact Us Button - Desktop */}
          <div className="hidden md:flex self-stretch my-auto items-center text-white font-semibold">
            <button className="flex justify-center items-center rounded-lg border border-[#06678A] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#27538E] self-stretch my-auto px-4 py-[10px] gap-1.5 overflow-hidden">
              <span className="self-stretch my-auto px-0.5">Contact Us</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full mt-4 bg-white rounded-lg shadow-lg py-4 px-6">
            <nav className="flex flex-col gap-4 text-[#475467] font-bold">
              <div className="py-2 text-left">Home</div>
              <div className="flex items-center justify-between py-2">
                <span>Services</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6950ecb31c284909607359aa7e93f637fcc361cb6a8b3ca3a711b3f76044b1b?placeholderIfAbsent=true&apiKey=631ef8f272f84a248633dc8a3c3b1fb1"
                  alt="Dropdown icon"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <div className="flex items-center justify-between py-2">
                <span>About</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6950ecb31c284909607359aa7e93f637fcc361cb6a8b3ca3a711b3f76044b1b?placeholderIfAbsent=true&apiKey=631ef8f272f84a248633dc8a3c3b1fb1"
                  alt="Dropdown icon"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <div className="py-2 text-left">Contact</div>
              <button className="flex justify-center items-center rounded-lg border border-[#06678A] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#27538E] text-white font-semibold py-[10px] mt-2">
                <span>Contact Us</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header


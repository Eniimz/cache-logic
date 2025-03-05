"use client";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full py-4">
      <div className="flex w-full px-10 items-center justify-between flex-wrap gap-10 gap-x-[100px] md:px-10 max-md:px-5">
        <div className="flex min-w-60 items-center gap-10 text-[#475467] font-bold whitespace-nowrap flex-wrap max-md:whitespace-normal">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7767356532f7d00e53c612259bc615d11c66c7537c8cacf202f987fe632eda00?placeholderIfAbsent=true&apiKey=631ef8f272f84a248633dc8a3c3b1fb1"
            alt="Logo"
            className="w-[197px] h-auto object-contain object-center self-stretch my-auto flex-shrink-0"
          />
          <nav className="flex min-w-60 items-center gap-8 self-stretch my-auto max-md:whitespace-normal">
            <div className="self-stretch my-auto overflow-hidden">Home</div>
            <div className="flex flex-col items-center self-stretch my-auto max-md:whitespace-normal">
              <div className="flex items-center gap-2 justify-center overflow-hidden">
                <span className="self-stretch my-auto">Services</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6950ecb31c284909607359aa7e93f637fcc361cb6a8b3ca3a711b3f76044b1b?placeholderIfAbsent=true&apiKey=631ef8f272f84a248633dc8a3c3b1fb1"
                  alt="Dropdown icon"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0"
                />
              </div>
            </div>
            <div className="flex flex-col items-center self-stretch my-auto max-md:whitespace-normal">
              <div className="flex items-center gap-2 justify-center overflow-hidden">
                <span className="self-stretch my-auto">About</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6950ecb31c284909607359aa7e93f637fcc361cb6a8b3ca3a711b3f76044b1b?placeholderIfAbsent=true&apiKey=631ef8f272f84a248633dc8a3c3b1fb1"
                  alt="Dropdown icon"
                  className="w-5 h-5 object-contain object-center self-stretch my-auto flex-shrink-0"
                />
              </div>
            </div>
            <div className="self-stretch my-auto overflow-hidden max-md:whitespace-normal">
              Contact
            </div>
          </nav>
        </div>
        <div className="flex self-stretch my-auto items-center gap-3 text-white font-semibold">
          <button className="flex justify-center items-center rounded-lg border border-[#06678A] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#27538E] self-stretch my-auto px-4 py-[10px] gap-1.5 overflow-hidden">
            <span className="self-stretch my-auto px-0.5">Contact Us</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

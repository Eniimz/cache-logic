"use client"

const Hero = () => {
  return (
    <section className="relative flex flex-col items-start justify-center px-4 sm:px-5 md:px-8 py-3 font-sans overflow-hidden">
      {/* Background container with rounded corners, positioned slightly downward */}
      <div className="hidden md:flex absolute z-0 w-[95%] lg:min-w-[1490px] left-0 md:left-4 lg:left-12 max-w-[1250px] h-[500px] sm:h-[600px] md:h-[700px] min-h-[500px] md:min-h-[700px] gap-8 bg-[#27538E] rounded-3xl md:rounded-4xl bottom-[-10px]"></div>

      {/* Main content container */}
      <div className="relative z-0 flex flex-col md:flex-row items-center justify-between w-full min-h-[500px] sm:min-h-[600px] md:min-h-[758px] gap-8 px-4 sm:px-6 md:px-8 lg:px-16 rounded-2xl sm:rounded-3xl">
        {/* Background image with rounded corners */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e0114f4f314f3ead7d30db0c42177e0f9175fd6bf2ec90e1fd79415e6321e5?placeholderIfAbsent=true"
          alt="Hero background"
          className="absolute inset-0 object-cover w-full h-full rounded-2xl sm:rounded-3xl"
        />

        {/* Left content - properly centered and aligned */}
        <div className="relative flex flex-col items-center md:items-start justify-center w-full md:w-3/4 lg:w-1/2 min-w-[240px] mx-auto md:ml-6 lg:ml-12 py-12 md:py-0">
          <div className="w-full max-w-[600px] text-center md:text-left">
            <h1 className="min-w-[240px] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight sm:leading-tight md:leading-[1.2] lg:leading-[72px] tracking-[-0.5px] md:tracking-[-1.2px] text-white">
              Fast-Tracking Your AI Evolution
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-normal leading-relaxed md:leading-8 text-[#D9D9D9]">
              Empowering businesses with cutting-edge technology and tailored solutions.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mt-8 sm:mt-10 md:mt-12 text-base sm:text-lg md:text-xl font-bold leading-[1.4] w-full sm:w-auto">
            <button className="flex items-center justify-center w-full sm:w-auto sm:min-w-[200px] md:min-w-[240px] px-4 sm:px-5 md:px-[22px] py-3 sm:py-4 gap-2.5 overflow-hidden text-[#344054] bg-white rounded-lg border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
              <span className="self-stretch my-auto px-0.5">Discover Our Services</span>
            </button>
            <button className="flex items-center justify-center w-full sm:w-auto px-4 sm:px-5 md:px-[22px] py-3 sm:py-4 gap-2.5 overflow-hidden text-white bg-[#1E3260] rounded-lg border border-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d311a7dfdfc4da5ac4afd1d39864f0040d7be99bd177b32f1dc6c9b9744ebd11?placeholderIfAbsent=true"
                alt="Contact icon"
                className="object-contain w-5 h-5 sm:w-6 sm:h-6 my-auto aspect-square flex-shrink-0"
              />
              <span className="self-stretch my-auto px-0.5">Contact Us</span>
            </button>
          </div>
        </div>

        {/* Right side - empty space for balance */}
        <div className="hidden md:block relative w-1/4 lg:w-1/2 h-full"></div>
      </div>
    </section>
  )
}

export default Hero


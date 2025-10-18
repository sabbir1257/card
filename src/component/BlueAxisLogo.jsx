import React from "react";

const BlueAxisLogo = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      {/* Main Wrapper */}
      <div className="relative w-72 h-72">
        {/* Curved Main Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#075472] to-[#02afa6] rounded-[0_180px_180px_0]"></div>

        {/* Folded Top Effect */}
        <div className="absolute left-0 -top-16 w-10 h-10 bg-[#1a7688] rounded-tl-[80px] opacity-80"></div>

        {/* Folded Bottom Effect */}
        <div className="absolute left-0 -bottom-16 w-10 h-56 bg-[#1a7688] rounded-bl-[80px] opacity-80"></div>

        {/* Inner White Logo + Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          {/* Geometric Symbol */}
          <div className="bg-transparent border border-transparent p-2">
            <div className="bg-white p-2">
              <div className="grid grid-cols-2 gap-1">
                <div className="border-2 border-[#037a84] h-16 w-10"></div>
                <div className="border-2 border-[#037a84] h-10 w-12"></div>
                <div className="col-span-2 border-2 border-[#037a84] h-12 w-24"></div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="mt-3 text-center leading-tight">
            <p className="text-white text-lg font-medium">BlueAxis</p>
            <p className="text-white text-lg font-semibold">Corp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueAxisLogo;

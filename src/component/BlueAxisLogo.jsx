import React from "react";

const BlueAxisLogo = () => {
  return (
    <div className="flex items-center justify-center  ">
      {/* Main Wrapper */}
      <div className="relative w-40 h-40">
        {/* Curved Main Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#075472] to-[#02afa6] rounded-[0_180px_180px_0]"></div>

        {/* Folded Top Effect */}
        <div className="absolute left-0 -top-16 w-10 h-16 bg-[#237f8e] rounded-tl-[80px] "></div>

        {/* Folded Bottom Effect */}
        <div className="absolute left-0 -bottom-16 w-10 h-16 bg-[#237f8e] rounded-bl-[80px] "></div>

        {/* Inner White Logo + Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          {/* Geometric Symbol Container */}
          <div className="">
          <img src="/log.jpg" alt="" className="w-20 h-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueAxisLogo;
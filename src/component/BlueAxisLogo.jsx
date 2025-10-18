import React from "react";

const BlueAxisLogo = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Main Wrapper */}
      <div className="relative w-64 h-80">
        {/* Curved main background */}
        <div className="absolute inset-0 bg-gradient-to-r  h-56 my-auto from-[#04475d] to-[#00b1aa] rounded-[0_200px_200px_0]"></div>

        {/* Folded effect (left inner shadow top and bottom) */}
        <div className="absolute left-0 top-0 w-10 h-1/2 bg-[#1d778a] rounded-tl-full opacity-60"></div>
        <div className="absolute left-0 bottom-0 w-10 h-1/2 bg-[#1d778a] rounded-bl-full  opacity-60"></div>

        {/* White square + inner shapes */}
        <div className="absolute  top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center  text-white">
          <div className="bg-white p-2">
            <div className="grid grid-cols-2 gap-1">
              <div className="border-2 border-[#02798a] h-16 w-10"></div>
              <div className="border-2 border-[#00a9a0] h-10 w-12"></div>
              <div className="col-span-2 border-2 border-[#00a9a0] h-12 w-24"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="mt-2 text-center">
            <p className="text-white text-lg font-medium leading-none">BlueAxis</p>
            <p className="text-white text-base font-semibold leading-none">Corp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueAxisLogo;
